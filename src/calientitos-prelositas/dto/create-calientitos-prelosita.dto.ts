import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  MaxLength,
} from '@nestjs/class-validator';

export class CreateCalientitosPrelositaDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 5)
  idCalientitosPrelosas: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(25)
  proyecto: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(25)
  cliente: string;

  @IsDateString()
  @IsNotEmpty()
  fechaInicio: string;

  @IsDateString()
  @IsNotEmpty()
  fechaFin: string;

  @IsNumber()
  @IsNotEmpty()
  metradoPiso: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(15)
  estado: string;

  @IsNumber()
  @IsNotEmpty()
  sotanos: number;

  @IsNumber()
  @IsNotEmpty()
  pisos: number;

  @IsNumber()
  @IsNotEmpty()
  pisosSemana: number;

  @IsNumber()
  @IsNotEmpty()
  total: number;
}
