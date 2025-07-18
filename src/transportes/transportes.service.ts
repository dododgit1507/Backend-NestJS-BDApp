import { Injectable } from '@nestjs/common';
import { UpdateTransporteDto } from './dto/update-transporte.dto';
import { CreateTransportesDto } from './dto/create-transporte.dto';

@Injectable()
export class TransportesService {
  create(createTransporteDto: CreateTransportesDto) {
    return 'This action adds a new transporte';
  }

  findAll() {
    return `This action returns all transportes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transporte`;
  }

  update(id: number, updateTransporteDto: UpdateTransporteDto) {
    return `This action updates a #${id} transporte`;
  }

  remove(id: number) {
    return `This action removes a #${id} transporte`;
  }
}
