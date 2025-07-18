import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioConductorDto } from './create-usuario-conductor.dto';

export class UpdateUsuarioConductorDto extends PartialType(CreateUsuarioConductorDto) {}
