import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoTransporteDto } from './create-tipo-transporte.dto';

export class UpdateTipoTransporteDto extends PartialType(CreateTipoTransporteDto) {}
