/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { UsuarioService } from 'src/usuario/usuario.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsuarioService,
        private readonly jwtService: JwtService
    ) { }

    async register(registerDto: RegisterDto) {

        const existingUser = await this.usersService.findByEmail(registerDto.correo);
        if (existingUser) {
            throw new UnauthorizedException('User already exists');
        }

        // Crear al usuario
        const user = await this.usersService.create(registerDto);

        // Generar el token
        const payload = { email: user.correo, sub: user.idUsuario };
        const token = this.jwtService.sign(payload);

        // Retornar el usuario sin el password y token
        const { contrasena, ...userWithoutPassword } = user;
        return {
            user: userWithoutPassword,
            access_token: token
        }
    }

    async login(loginDto: LoginDto) {
        // Buscar usuario por email
        const user = await this.usersService.findByEmail(loginDto.email);
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }
rificar contraseña
        const isPasswordValid = await this.usersService.validatePassword(
            loginDto.password,
            user.contrasena,
        );
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        // Generar token
        const payload = { email: user.correo, sub: user.idUsuario };
        const token = this.jwtService.sign(payload);

        // Retornar usuario sin contraseña y token
        const { contrasena, ...userWithoutPassword } = user;
        return {
            user: userWithoutPassword,
            access_token: token,
        };
    }

    async validateUser(payload: any) {
        return await this.usersService.findById(payload.sub);
    }
}
