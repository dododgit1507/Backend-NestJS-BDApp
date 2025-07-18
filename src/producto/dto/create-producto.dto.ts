import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsInt,
  Min,
} from '@nestjs/class-validator';

export class CreateProductoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(15)
  abreviatura: string;

  @IsInt()
  @Min(0)
  dias: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(25)
  estado: string;
}
