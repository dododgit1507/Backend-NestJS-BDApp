import { Injectable } from '@nestjs/common';
import { CreateCalientitosPrelositaDto } from './dto/create-calientitos-prelosita.dto';
import { UpdateCalientitosPrelositaDto } from './dto/update-calientitos-prelosita.dto';

@Injectable()
export class CalientitosPrelositasService {
  create(createCalientitosPrelositaDto: CreateCalientitosPrelositaDto) {
    return 'This action adds a new calientitosPrelosita';
  }

  findAll() {
    return `This action returns all calientitosPrelositas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} calientitosPrelosita`;
  }

  update(id: number, updateCalientitosPrelositaDto: UpdateCalientitosPrelositaDto) {
    return `This action updates a #${id} calientitosPrelosita`;
  }

  remove(id: number) {
    return `This action removes a #${id} calientitosPrelosita`;
  }
}
