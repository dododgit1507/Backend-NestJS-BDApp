import { PartialType } from '@nestjs/mapped-types';
import { CreateAsignacionCodigoIngenieroDto } from './create-asignacion-codigo-ingeniero.dto';

export class UpdateAsignacionCodigoIngenieroDto extends PartialType(CreateAsignacionCodigoIngenieroDto) {}
