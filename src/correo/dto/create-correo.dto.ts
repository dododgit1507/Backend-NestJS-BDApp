import { IsEmail, IsNotEmpty, IsString, Length, MaxLength } from "@nestjs/class-validator";

export class CreateCorreoDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 5)
  idCorreo: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(50)
  correo: string;

  @IsString()
  @IsNotEmpty()
  idUsuario: string;
}
