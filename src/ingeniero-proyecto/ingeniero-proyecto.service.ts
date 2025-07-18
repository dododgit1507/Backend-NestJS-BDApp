import { Injectable } from '@nestjs/common';
import { CreateIngenieroProyectoDto } from './dto/create-ingeniero-proyecto.dto';
import { UpdateIngenieroProyectoDto } from './dto/update-ingeniero-proyecto.dto';

@Injectable()
export class IngenieroProyectoService {
  create(createIngenieroProyectoDto: CreateIngenieroProyectoDto) {
    return 'This action adds a new ingenieroProyecto';
  }

  findAll() {
    return `This action returns all ingenieroProyecto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ingenieroProyecto`;
  }

  update(id: number, updateIngenieroProyectoDto: UpdateIngenieroProyectoDto) {
    return `This action updates a #${id} ingenieroProyecto`;
  }

  remove(id: number) {
    return `This action removes a #${id} ingenieroProyecto`;
  }
}
