import { IsString, Length } from '@nestjs/class-validator';

export class CreateTipoTransporteDto {
  @IsString()
  @Length(5, 5)
  idTipoTransporte: string;

  @IsString()
  @Length(1, 50)
  nombre: string;
}
