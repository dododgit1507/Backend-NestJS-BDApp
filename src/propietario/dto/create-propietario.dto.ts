import {
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  MaxLength,
  IsNumberString,
  Matches,
} from '@nestjs/class-validator';

export class CreatePropietarioDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 5)
  idPropietario: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @Length(11, 11, { message: 'El RUC debe tener exactamente 11 dígitos' })
  @Matches(/^\d+$/, { message: 'El RUC debe contener solo números' })
  ruc: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  razonSocial: string;

  @IsNumberString({}, { message: 'El precio debe ser numérico' })
  @IsNotEmpty()
  precio: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  telefono?: string;

  @IsOptional()
  @IsString()
  direccion?: string;
}
