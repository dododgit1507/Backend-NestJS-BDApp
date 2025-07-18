import { Injectable } from '@nestjs/common';
import { CreateEntregaDespachoDto } from './dto/create-entrega-despacho.dto';
import { UpdateEntregaDespachoDto } from './dto/update-entrega-despacho.dto';

@Injectable()
export class EntregaDespachoService {
  create(createEntregaDespachoDto: CreateEntregaDespachoDto) {
    return 'This action adds a new entregaDespacho';
  }

  findAll() {
    return `This action returns all entregaDespacho`;
  }

  findOne(id: number) {
    return `This action returns a #${id} entregaDespacho`;
  }

  update(id: number, updateEntregaDespachoDto: UpdateEntregaDespachoDto) {
    return `This action updates a #${id} entregaDespacho`;
  }

  remove(id: number) {
    return `This action removes a #${id} entregaDespacho`;
  }
}
