import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import * as bcrypt from 'bcrypt';
import { CreateUsuarioDto } from './dto/create-user.dto';
import { UpdateUsuarioDto } from './dto/update-user.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async findByCorreo(correo: string): Promise<Usuario | null> {
    return await this.usuarioRepository.findOne({
      where: { correo },
    });
  }

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const { contrasena, correo, ...userData } = createUsuarioDto;

    const userExists = await this.usuarioRepository.findOne({
      where: { correo },
    });
    if (userExists) {
      throw new BadRequestException('El usuario ya existe');
    }

    const hashPassword = await bcrypt.hash(contrasena, 10);

    const user = this.usuarioRepository.create({
      ...userData,
      correo,
      contrasena: hashPassword,
    });

    return await this.usuarioRepository.save(user);
  }

  async findByEmail(email: string): Promise<Usuario | null> {
    return await this.usuarioRepository.findOne({
      where: { correo: email },
    });
  }

  async findById(id: string): Promise<Usuario | null> {
    return await this.usuarioRepository.findOne({
      where: { idUsuario: id },
    });
  }

  async validatePassword(plain: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(plain, hash);
  }

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find();
  }

  async findOne(id: string): Promise<Usuario> {
    const user = await this.usuarioRepository.findOne({
      where: { idUsuario: id },
    });
    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return user;
  }

  async update(id: string, updateDto: UpdateUsuarioDto): Promise<Usuario> {
    const user = await this.findOne(id);
    const updated = Object.assign(user, updateDto);
    return await this.usuarioRepository.save(updated);
  }

  async remove(id: string): Promise<Usuario> {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }

    // Eliminación lógica: no es posible sin campo isActive, así que eliminamos completamente
    await this.usuarioRepository.remove(user);
    return user;
  }
}
