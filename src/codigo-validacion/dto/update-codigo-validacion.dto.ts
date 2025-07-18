import { PartialType } from '@nestjs/mapped-types';
import { CreateCodigoValidacionDto } from './create-codigo-validacion.dto';

export class UpdateCodigoValidacionDto extends PartialType(CreateCodigoValidacionDto) {}
