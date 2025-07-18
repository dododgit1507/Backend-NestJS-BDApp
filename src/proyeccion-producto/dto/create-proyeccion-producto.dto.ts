import {
  IsString,
  IsNotEmpty,
  IsDateString,
  IsInt,
  Min,
  MaxLength,
  IsNumber,
} from '@nestjs/class-validator';

export class CreateProyeccionProductoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  idProyeccionProducto: string;

  @IsDateString()
  fechaInicio: string;

  @IsDateString()
  fechaFin: string;

  @IsInt()
  @Min(0)
  pisos: number;

  @IsInt()
  @Min(0)
  sotanos: number;

  @IsInt()
  @Min(0)
  pisosSemana: number;

  @IsNumber()
  metradoPiso: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(25)
  estado: string;

  @IsNumber()
  total: number;

  @IsString()
  @IsNotEmpty()
  idCliente: string;

  @IsString()
  @IsNotEmpty()
  idIngeniero: string;

  @IsString()
  @IsNotEmpty()
  idProyecto: string;

  @IsString()
  @IsNotEmpty()
  idTipoProducto: string;
}
