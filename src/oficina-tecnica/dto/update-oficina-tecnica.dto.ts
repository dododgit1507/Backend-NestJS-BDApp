import { PartialType } from '@nestjs/mapped-types';
import { CreateOficinaTecnicaDto } from './create-oficina-tecnica.dto';

export class UpdateOficinaTecnicaDto extends PartialType(CreateOficinaTecnicaDto) {}
