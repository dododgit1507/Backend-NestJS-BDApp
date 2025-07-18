import { Injectable } from '@nestjs/common';
import { CreateUsuarioConductorDto } from './dto/create-usuario-conductor.dto';
import { UpdateUsuarioConductorDto } from './dto/update-usuario-conductor.dto';

@Injectable()
export class UsuarioConductorService {
  create(createUsuarioConductorDto: CreateUsuarioConductorDto) {
    return 'This action adds a new usuarioConductor';
  }

  findAll() {
    return `This action returns all usuarioConductor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuarioConductor`;
  }

  update(id: number, updateUsuarioConductorDto: UpdateUsuarioConductorDto) {
    return `This action updates a #${id} usuarioConductor`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuarioConductor`;
  }
}
