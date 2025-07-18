import { IsString, Length } from '@nestjs/class-validator';

export class CreateOficinaTecnicaDto {
  @IsString()
  @Length(1, 5)
  idOficina: string;

  @IsString()
  @Length(1, 25)
  nombre: string;

  @IsString()
  @Length(1, 25)
  especialidad: string;

  @IsString()
  @Length(1, 10)
  estado: string;
}
