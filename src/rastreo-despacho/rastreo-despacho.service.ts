import { Injectable } from '@nestjs/common';
import { CreateRastreoDespachoDto } from './dto/create-rastreo-despacho.dto';
import { UpdateRastreoDespachoDto } from './dto/update-rastreo-despacho.dto';

@Injectable()
export class RastreoDespachoService {
  create(createRastreoDespachoDto: CreateRastreoDespachoDto) {
    return 'This action adds a new rastreoDespacho';
  }

  findAll() {
    return `This action returns all rastreoDespacho`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rastreoDespacho`;
  }

  update(id: number, updateRastreoDespachoDto: UpdateRastreoDespachoDto) {
    return `This action updates a #${id} rastreoDespacho`;
  }

  remove(id: number) {
    return `This action removes a #${id} rastreoDespacho`;
  }
}
