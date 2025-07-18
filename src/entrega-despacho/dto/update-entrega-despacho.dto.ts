import { PartialType } from '@nestjs/mapped-types';
import { CreateEntregaDespachoDto } from './create-entrega-despacho.dto';

export class UpdateEntregaDespachoDto extends PartialType(CreateEntregaDespachoDto) {}
