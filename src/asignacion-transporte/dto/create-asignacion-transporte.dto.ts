import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from '@nestjs/class-validator';

export class CreateAsignacionTransporteDto {
  @IsString()
  @IsNotEmpty()
  idAsignacionTransporte: string;

  @IsDateString()
  @IsNotEmpty()
  fechaAsignacion: string;

  @IsOptional()
  @IsString()
  observaciones?: string;

  @IsString()
  @IsNotEmpty()
  codigoDespacho: string;

  @IsString()
  @IsNotEmpty()
  idTransporte: string;

  @IsString()
  @IsNotEmpty()
  idUsuarioConductor: string;
}
