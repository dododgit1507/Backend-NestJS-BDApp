import { PartialType } from '@nestjs/mapped-types';
import { CreateAsignacionClienteIngenieroDto } from './create-asignacion-cliente-ingeniero.dto';

export class UpdateAsignacionClienteIngenieroDto extends PartialType(CreateAsignacionClienteIngenieroDto) {}
