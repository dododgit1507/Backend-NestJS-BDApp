import {
  IsString,
  IsOptional,
  IsDate,
  Length,
} from '@nestjs/class-validator';

export class CreateRastreoDespachoDto {
  @IsString()
  @Length(5, 5)
  idRastreo: string;

  @IsOptional()
  @IsString()
  latitud?: string;

  @IsOptional()
  @IsString()
  longitud?: string;

  @IsOptional()
  @IsDate()
  fechaHora?: Date;

  @IsString()
  idAsignacionTransporte: string;
}
