import { PartialType } from '@nestjs/mapped-types';
import { CreateIngenieroProyectoDto } from './create-ingeniero-proyecto.dto';

export class UpdateIngenieroProyectoDto extends PartialType(CreateIngenieroProyectoDto) {}
