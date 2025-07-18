import { Injectable } from '@nestjs/common';
import { CreateCodigoValidacionDto } from './dto/create-codigo-validacion.dto';
import { UpdateCodigoValidacionDto } from './dto/update-codigo-validacion.dto';

@Injectable()
export class CodigoValidacionService {
  create(createCodigoValidacionDto: CreateCodigoValidacionDto) {
    return 'This action adds a new codigoValidacion';
  }

  findAll() {
    return `This action returns all codigoValidacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} codigoValidacion`;
  }

  update(id: number, updateCodigoValidacionDto: UpdateCodigoValidacionDto) {
    return `This action updates a #${id} codigoValidacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} codigoValidacion`;
  }
}
