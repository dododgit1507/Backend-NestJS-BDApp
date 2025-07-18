import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsDateString,
  IsNumber,
  IsOptional,
} from '@nestjs/class-validator';

export class CreateProyeccionSemanalProductoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(5)
  numeroSemana: string;

  @IsDateString()
  fecha: string;

  @IsOptional()
  @IsNumber()
  metrosCuadrados?: number;

  @IsString()
  @IsNotEmpty()
  idProyeccionProducto: string;
}
