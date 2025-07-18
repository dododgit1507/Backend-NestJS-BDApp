import { Injectable } from '@nestjs/common';
import { CreateDespachoDto } from './dto/create-despacho.dto';
import { UpdateDespachoDto } from './dto/update-despacho.dto';

@Injectable()
export class DespachoService {
  create(createDespachoDto: CreateDespachoDto) {
    return 'This action adds a new despacho';
  }

  findAll() {
    return `This action returns all despacho`;
  }

  findOne(id: number) {
    return `This action returns a #${id} despacho`;
  }

  update(id: number, updateDespachoDto: UpdateDespachoDto) {
    return `This action updates a #${id} despacho`;
  }

  remove(id: number) {
    return `This action removes a #${id} despacho`;
  }
}
