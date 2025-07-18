import { PartialType } from '@nestjs/mapped-types';
import { CreateCalientitosPrelositaDto } from './create-calientitos-prelosita.dto';

export class UpdateCalientitosPrelositaDto extends PartialType(CreateCalientitosPrelositaDto) {}
