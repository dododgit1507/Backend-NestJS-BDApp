import { IsString, Length, IsEmail } from '@nestjs/class-validator';

export class CreateUsuarioDto {
  @IsString()
  @Length(1, 10)
  idUsuario: string;

  @IsString()
  @Length(1, 25)
  nombre: string;

  @IsEmail()
  @Length(1, 50)
  correo: string;

  @IsString()
  @Length(1, 60)
  contrasena: string;

  @IsString()
  @Length(1, 25)
  rol: string;
}
