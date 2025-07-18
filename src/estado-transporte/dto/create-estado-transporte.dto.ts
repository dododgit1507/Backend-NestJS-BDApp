import { IsNotEmpty, IsString, Length, MaxLength } from '@nestjs/class-validator';

export class CreateEstadoTransporteDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 5)
  idEstadoTransporte: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  nombre: string;
}
