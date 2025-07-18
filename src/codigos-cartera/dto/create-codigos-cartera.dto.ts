import { ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, IsString, Length } from "@nestjs/class-validator";

export class CreateCodigosCarteraDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 1)
  codigo: string;

  // Si deseas permitir asignación de ingenieros en el DTO:
  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true }) // O @IsUUID('4', { each: true }) si los IDs son UUID
  ingenieroIds?: string[];
}
