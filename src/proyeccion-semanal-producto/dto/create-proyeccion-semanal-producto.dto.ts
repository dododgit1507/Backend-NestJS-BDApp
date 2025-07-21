import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsDateString,
  IsNumber,
  IsOptional,
  IsInt,
} from '@nestjs/class-validator';

export class CreateProyeccionSemanalProductoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(5)
  numeroSemana: string;

  @IsDateString()
  @IsNotEmpty()
  fecha: string;

  @IsOptional()
  @IsNumber()
  metrosCuadrados?: number;

  @IsInt()
  @IsNotEmpty()
  idProyeccionProducto: number;
}
