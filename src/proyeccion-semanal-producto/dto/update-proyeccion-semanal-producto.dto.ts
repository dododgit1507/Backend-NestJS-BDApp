import { PartialType } from '@nestjs/mapped-types';
import { CreateProyeccionSemanalProductoDto } from './create-proyeccion-semanal-producto.dto';

export class UpdateProyeccionSemanalProductoDto extends PartialType(CreateProyeccionSemanalProductoDto) {}
