import { IsNotEmpty, IsOptional, IsString, Length, MaxLength } from "@nestjs/class-validator";

export class CreateClienteDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 10)
  idCliente: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(15)
  ruc: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  nombreComercial: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  razonSocial: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 10)
  telefono: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(25)
  pais: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(75)
  distrito: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(125)
  direccion: string;

  @IsOptional()
  @IsString()
  @MaxLength(10)
  tipo?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  credito: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  condicion: string;

  @IsString()
  @IsNotEmpty()
  datos: string;
}
