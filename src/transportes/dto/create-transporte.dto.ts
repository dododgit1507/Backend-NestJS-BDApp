import { IsString, IsDateString, IsOptional, Length } from '@nestjs/class-validator';

export class CreateTransportesDto {
  @IsString()
  @Length(5, 5)
  idTransporte: string;

  @IsString()
  @Length(7, 7)
  placa: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  marca?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  modelo?: string;

  @IsDateString()
  fechaRegistro: string;

  @IsString()
  @Length(5, 5)
  idEstadoTransporte: string;

  @IsString()
  @Length(5, 5)
  idModalidadTransporte: string;

  @IsString()
  @Length(5, 5)
  idPropietario: string;

  @IsString()
  @Length(5, 5)
  idTipoTransporte: string;
}
