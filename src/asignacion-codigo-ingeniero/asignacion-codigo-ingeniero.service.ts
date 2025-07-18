import { Injectable } from '@nestjs/common';
import { CreateAsignacionCodigoIngenieroDto } from './dto/create-asignacion-codigo-ingeniero.dto';
import { UpdateAsignacionCodigoIngenieroDto } from './dto/update-asignacion-codigo-ingeniero.dto';

@Injectable()
export class AsignacionCodigoIngenieroService {
  create(createAsignacionCodigoIngenieroDto: CreateAsignacionCodigoIngenieroDto) {
    return 'This action adds a new asignacionCodigoIngeniero';
  }

  findAll() {
    return `This action returns all asignacionCodigoIngeniero`;
  }

  findOne(id: number) {
    return `This action returns a #${id} asignacionCodigoIngeniero`;
  }

  update(id: number, updateAsignacionCodigoIngenieroDto: UpdateAsignacionCodigoIngenieroDto) {
    return `This action updates a #${id} asignacionCodigoIngeniero`;
  }

  remove(id: number) {
    return `This action removes a #${id} asignacionCodigoIngeniero`;
  }
}
