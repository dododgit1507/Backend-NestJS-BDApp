import { Injectable } from '@nestjs/common';
import { CreateTipoProductoDto } from './dto/create-tipo-producto.dto';
import { UpdateTipoProductoDto } from './dto/update-tipo-producto.dto';
import { TipoProducto } from './entities/tipo-producto.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TipoProductoService {

  constructor(@InjectRepository(TipoProducto) private tipoProductoRepository: Repository<TipoProducto>) {}

  async create(createTipoProductoDto: CreateTipoProductoDto): Promise<TipoProducto> {
    const tipoProducto = this.tipoProductoRepository.create(createTipoProductoDto);
    return await this.tipoProductoRepository.save(tipoProducto);
  }

  async findAll(): Promise<TipoProducto[]> {
    return await this.tipoProductoRepository.find();
  }

  async findOne(id: number): Promise<TipoProducto | null> {
    return await this.tipoProductoRepository.findOne({ where: { idTipoProducto: id.toString() } });
  }

  async update(id: number, updateTipoProductoDto: UpdateTipoProductoDto): Promise<TipoProducto | null> {
    const tipoProducto = await this.tipoProductoRepository.findOne({ where: { idTipoProducto: id.toString() } });
    if (!tipoProducto) {
      throw new Error('Tipo de Producto no encontrado');
    }
    Object.assign(tipoProducto, updateTipoProductoDto);
    return await this.tipoProductoRepository.save(tipoProducto);
  }

  //TODO PENDING DELETE LOGICAL METHOD
}
