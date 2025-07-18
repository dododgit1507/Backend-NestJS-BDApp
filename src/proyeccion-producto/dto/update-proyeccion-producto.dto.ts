import { PartialType } from '@nestjs/mapped-types';
import { CreateProyeccionProductoDto } from './create-proyeccion-producto.dto';

export class UpdateProyeccionProductoDto extends PartialType(CreateProyeccionProductoDto) {}
