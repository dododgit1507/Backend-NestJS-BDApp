import { PartialType } from '@nestjs/mapped-types';
import { CreateCodigosCarteraDto } from './create-codigos-cartera.dto';

export class UpdateCodigosCarteraDto extends PartialType(CreateCodigosCarteraDto) {}
