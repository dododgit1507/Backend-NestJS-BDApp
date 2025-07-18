import { PartialType } from '@nestjs/mapped-types';
import { CreateModalidadTransporteDto } from './create-modalidad-transporte.dto';

export class UpdateModalidadTransporteDto extends PartialType(CreateModalidadTransporteDto) {}
