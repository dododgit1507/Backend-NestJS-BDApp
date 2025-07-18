import { Injectable } from '@nestjs/common';
import { CreateAsignacionTransporteDto } from './dto/create-asignacion-transporte.dto';
import { UpdateAsignacionTransporteDto } from './dto/update-asignacion-transporte.dto';

@Injectable()
export class AsignacionTransporteService {
  create(createAsignacionTransporteDto: CreateAsignacionTransporteDto) {
    return 'This action adds a new asignacionTransporte';
  }

  findAll() {
    return `This action returns all asignacionTransporte`;
  }

  findOne(id: number) {
    return `This action returns a #${id} asignacionTransporte`;
  }

  update(id: number, updateAsignacionTransporteDto: UpdateAsignacionTransporteDto) {
    return `This action updates a #${id} asignacionTransporte`;
  }

  remove(id: number) {
    return `This action removes a #${id} asignacionTransporte`;
  }
}
