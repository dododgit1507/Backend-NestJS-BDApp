import { PartialType } from '@nestjs/mapped-types';
import { CreateRastreoDespachoDto } from './create-rastreo-despacho.dto';

export class UpdateRastreoDespachoDto extends PartialType(CreateRastreoDespachoDto) {}
