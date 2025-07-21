import { IsNotEmpty, IsString, IsEmail, MinLength } from 'class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty()
  @IsString()
  idUsuario?: string; // clave primaria

  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsEmail()
  correo: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  contrasena: string;

  @IsNotEmpty()
  @IsString()
  rol: string;
}
