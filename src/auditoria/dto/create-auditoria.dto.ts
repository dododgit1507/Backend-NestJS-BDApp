import {
  IsDateString,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
} from '@nestjs/class-validator';
export class CreateAuditoriaDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 15)
  tipoAccion: string;

  @IsString()
  @IsNotEmpty()
  motivo: string;

  @IsDateString()
  @IsNotEmpty()
  fecha: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/, {
    message: 'hora debe estar en formato HH:mm o HH:mm:ss',
  })
  hora: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 15)
  responsable: string;

  @IsString()
  @IsNotEmpty()
  codigoDespacho: string;

  @IsString()
  @IsNotEmpty()
  idCliente: string;

  @IsString()
  @IsNotEmpty()
  idIngeniero: string;

  @IsString()
  @IsNotEmpty()
  idProyecto: string;
}
