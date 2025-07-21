import { Injectable } from '@nestjs/common';
import { CreateIngenieroProyectoDto } from './dto/create-ingeniero-proyecto.dto';
import { UpdateIngenieroProyectoDto } from './dto/update-ingeniero-proyecto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { IngenieroProyecto } from './entities/ingeniero-proyecto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IngenieroProyectoService {

  constructor(@InjectRepository(IngenieroProyecto) private ingenieroProyectoRepository: Repository<IngenieroProyecto>) {}

  async create(createIngenieroProyectoDto: CreateIngenieroProyectoDto): Promise<IngenieroProyecto> {
    const ingenieroProyecto = this.ingenieroProyectoRepository.create(createIngenieroProyectoDto);
    return await this.ingenieroProyectoRepository.save(ingenieroProyecto);
  }

  async findAll(): Promise<IngenieroProyecto[]> {
    return await this.ingenieroProyectoRepository.find();
  }

  async findOne(id: number): Promise<IngenieroProyecto | null> {
    return await this.ingenieroProyectoRepository.findOne({ where: { idIngeniero: id.toString() } });
  }

  async update(id: number, updateIngenieroProyectoDto: UpdateIngenieroProyectoDto): Promise<IngenieroProyecto> {
    const ingenieroProyecto = await this.ingenieroProyectoRepository.findOne({ where: { idIngeniero: id.toString() } });
    if (!ingenieroProyecto) {
      throw new Error('Ingeniero Proyecto no encontrado');
    }
    Object.assign(ingenieroProyecto, updateIngenieroProyectoDto);
    return await this.ingenieroProyectoRepository.save(ingenieroProyecto);
  }

  //TODO PENDING LOGICAL DELETE

}
