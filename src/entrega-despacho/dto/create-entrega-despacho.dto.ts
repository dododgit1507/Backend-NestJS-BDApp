import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsDateString,
  Length,
  MaxLength,
  Matches,
} from '@nestjs/class-validator';

export class CreateEntregaDespachoDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 5)
  idEntregaDespacho: string;

  @IsDateString()
  @IsNotEmpty()
  fechaEntrega: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/, {
    message: 'horaEntrega debe estar en formato HH:mm o HH:mm:ss',
  })
  horaEntrega: string;

  @IsOptional()
  @IsString()
  latitudEntrega?: string;

  @IsOptional()
  @IsString()
  longitudEntrega?: string;

  @IsOptional()
  @IsString()
  fotoEvidenciaUrl?: string;

  @IsOptional()
  @IsString()
  observaciones?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombreReceptor: string;

  @IsString()
  @IsNotEmpty()
  idAsignacionTransporte: string;
}
