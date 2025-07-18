import { IsString, IsBoolean, IsOptional, IsEmail, Length, IsDateString } from '@nestjs/class-validator';

export class CreateUsuarioConductorDto {
  @IsString()
  @Length(1, 10)
  idUsuarioConductor: string;

  @IsString()
  @Length(1, 60)
  contrasena: string;

  @IsString()
  @Length(1, 100)
  nombre: string;

  @IsString()
  @Length(9, 9)
  telefono: string;

  @IsString()
  @Length(8, 8)
  dni: string;

  @IsOptional()
  @IsString()
  @Length(1, 20)
  licenciaConducir?: string;

  @IsBoolean()
  activo: boolean;

  @IsDateString()
  fechaRegistro: string;

  @IsEmail()
  @Length(1, 100)
  correo: string;
}
