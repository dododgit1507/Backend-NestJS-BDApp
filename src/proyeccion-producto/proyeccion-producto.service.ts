import { Injectable } from '@nestjs/common';
import { CreateProyeccionProductoDto } from './dto/create-proyeccion-producto.dto';
import { UpdateProyeccionProductoDto } from './dto/update-proyeccion-producto.dto';

@Injectable()
export class ProyeccionProductoService {
  create(createProyeccionProductoDto: CreateProyeccionProductoDto) {
    return 'This action adds a new proyeccionProducto';
  }

  findAll() {
    return `This action returns all proyeccionProducto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} proyeccionProducto`;
  }

  update(id: number, updateProyeccionProductoDto: UpdateProyeccionProductoDto) {
    return `This action updates a #${id} proyeccionProducto`;
  }

  remove(id: number) {
    return `This action removes a #${id} proyeccionProducto`;
  }
}
