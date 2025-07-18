import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsOptional,
  IsBoolean,
  IsDateString,
} from '@nestjs/class-validator';

export class CreateProyectoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(15)
  idProyecto: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(25)
  proyectoCup: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(25)
  suf: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  codigo: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(4)
  anio: string;

  @IsOptional()
  @IsDateString()
  fechaTentativa?: string;

  @IsOptional()
  @IsBoolean()
  subioordencompra?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(5)
  idTipoProyecto?: string;
}
