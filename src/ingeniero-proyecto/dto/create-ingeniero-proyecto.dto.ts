import { IsNotEmpty, IsString, Length, MaxLength, IsEmail } from '@nestjs/class-validator';


export class CreateIngenieroProyectoDto {

    @IsString()
  @IsNotEmpty()
  @Length(1, 5)
  idIngeniero: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(25)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  estado: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(50)
  correo: string;

}
