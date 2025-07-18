import { Injectable } from '@nestjs/common';
import { CreateCodigosCarteraDto } from './dto/create-codigos-cartera.dto';
import { UpdateCodigosCarteraDto } from './dto/update-codigos-cartera.dto';

@Injectable()
export class CodigosCarteraService {
  create(createCodigosCarteraDto: CreateCodigosCarteraDto) {
    return 'This action adds a new codigosCartera';
  }

  findAll() {
    return `This action returns all codigosCartera`;
  }

  findOne(id: number) {
    return `This action returns a #${id} codigosCartera`;
  }

  update(id: number, updateCodigosCarteraDto: UpdateCodigosCarteraDto) {
    return `This action updates a #${id} codigosCartera`;
  }

  remove(id: number) {
    return `This action removes a #${id} codigosCartera`;
  }
}
