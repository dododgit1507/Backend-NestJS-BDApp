import { Injectable } from '@nestjs/common';
import { CreateProyeccionSemanalProductoDto } from './dto/create-proyeccion-semanal-producto.dto';
import { UpdateProyeccionSemanalProductoDto } from './dto/update-proyeccion-semanal-producto.dto';

@Injectable()
export class ProyeccionSemanalProductoService {
  create(createProyeccionSemanalProductoDto: CreateProyeccionSemanalProductoDto) {
    return 'This action adds a new proyeccionSemanalProducto';
  }

  findAll() {
    return `This action returns all proyeccionSemanalProducto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} proyeccionSemanalProducto`;
  }

  update(id: number, updateProyeccionSemanalProductoDto: UpdateProyeccionSemanalProductoDto) {
    return `This action updates a #${id} proyeccionSemanalProducto`;
  }

  remove(id: number) {
    return `This action removes a #${id} proyeccionSemanalProducto`;
  }
}
