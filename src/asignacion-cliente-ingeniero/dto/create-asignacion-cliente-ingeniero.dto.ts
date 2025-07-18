import { IsDateString, IsNotEmpty, IsOptional, IsString, Length } from "@nestjs/class-validator";


export class CreateAsignacionClienteIngenieroDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 5)
  idIngeniero: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 10)
  idCliente: string;

  @IsOptional()
  @IsDateString()
  fechaAsignacion?: string;
}
