import { PartialType } from '@nestjs/mapped-types';
import { CreateTransportesDto } from './create-transporte.dto';

export class UpdateTransporteDto extends PartialType(CreateTransportesDto) {}
