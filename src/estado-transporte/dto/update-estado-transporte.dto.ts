import { PartialType } from '@nestjs/mapped-types';
import { CreateEstadoTransporteDto } from './create-estado-transporte.dto';

export class UpdateEstadoTransporteDto extends PartialType(CreateEstadoTransporteDto) {}
