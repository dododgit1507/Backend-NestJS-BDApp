import { PartialType } from '@nestjs/mapped-types';
import { CreateAsignacionTransporteDto } from './create-asignacion-transporte.dto';

export class UpdateAsignacionTransporteDto extends PartialType(CreateAsignacionTransporteDto) {}
