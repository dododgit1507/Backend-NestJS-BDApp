import { Injectable } from '@nestjs/common';
import { CreateAsignacionClienteIngenieroDto } from './dto/create-asignacion-cliente-ingeniero.dto';
import { UpdateAsignacionClienteIngenieroDto } from './dto/update-asignacion-cliente-ingeniero.dto';

@Injectable()
export class AsignacionClienteIngenieroService {
  create(createAsignacionClienteIngenieroDto: CreateAsignacionClienteIngenieroDto) {
    return 'This action adds a new asignacionClienteIngeniero';
  }

  findAll() {
    return `This action returns all asignacionClienteIngeniero`;
  }

  findOne(id: number) {
    return `This action returns a #${id} asignacionClienteIngeniero`;
  }

  update(id: number, updateAsignacionClienteIngenieroDto: UpdateAsignacionClienteIngenieroDto) {
    return `This action updates a #${id} asignacionClienteIngeniero`;
  }

  remove(id: number) {
    return `This action removes a #${id} asignacionClienteIngeniero`;
  }
}
