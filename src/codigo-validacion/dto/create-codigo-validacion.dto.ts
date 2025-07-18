import { IsDateString, IsNotEmpty, IsString, Length, Matches, MaxLength } from "@nestjs/class-validator";

export class CreateCodigoValidacionDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 8)
  codigo: string;

  @IsDateString()
  @IsNotEmpty()
  fechaCreacion: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/, {
    message: 'horaCreacion debe estar en formato HH:mm o HH:mm:ss',
  })
  horaCreacion: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  estado: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  responsable: string;
}
