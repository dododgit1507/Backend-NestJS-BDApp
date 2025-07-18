import { IsString, Length } from '@nestjs/class-validator';

export class CreateTipoProductoDto {
  @IsString()
  @Length(5, 5)
  idTipoProducto: string;

  @IsString()
  @Length(1, 25)
  nombre: string;
}
