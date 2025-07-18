import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsDateString,
  IsNumber,
} from '@nestjs/class-validator';

export class CreateProyeccionSemanalDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(5)
  numeroSemana: string;

  @IsDateString()
  fecha: string;

  @IsNumber()
  metrosCuadrados: number;

  @IsString()
  @IsNotEmpty()
  idCalientitosPrelosas: string;
}
