import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProyectoDto } from './dto/create-proyecto.dto';
import { UpdateProyectoDto } from './dto/update-proyecto.dto';
import { Proyecto } from './entities/proyecto.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProyectoService {

  constructor(@InjectRepository(Proyecto)
  private proyectoRepository: Repository<Proyecto>) {}

  create(createProyectoDto: CreateProyectoDto):Promise<Proyecto> {
    const proyecto = this.proyectoRepository.create(createProyectoDto);
    return this.proyectoRepository.save(proyecto);
  }

  findAll(): Promise<Proyecto[]> {
    return this.proyectoRepository.find();
  }

  findOne(id: string): Promise<Proyecto | null> {
    return this.proyectoRepository.findOne({ where: { idProyecto: id } });
  }

  async update (id: string, updateProyectoDto: UpdateProyectoDto): Promise<Proyecto> {
    const proyecto = await this.proyectoRepository.preload({
      idProyecto: id,
      ...updateProyectoDto,
    });

    if (!proyecto) {
      throw new NotFoundException(`Proyecto con ID ${id} no encontrado`);
    }

    return this.proyectoRepository.save(proyecto);
  }

}
