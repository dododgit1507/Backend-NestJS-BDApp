import { Injectable } from '@nestjs/common';
import { CreateMantenimientoDto } from './dto/create-mantenimiento.dto';
import { UpdateMantenimientoDto } from './dto/update-mantenimiento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Mantenimiento } from './entities/mantenimiento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MantenimientoService {

  constructor(@InjectRepository(Mantenimiento) private mantenimientoRepository: Repository<Mantenimiento>) {}

  async create(createMantenimientoDto: CreateMantenimientoDto): Promise<Mantenimiento> {
    const mantenimiento = this.mantenimientoRepository.create(createMantenimientoDto);
    return await this.mantenimientoRepository.save(mantenimiento);
  }

  async findAll(): Promise<Mantenimiento[]> {
    return await this.mantenimientoRepository.find();
  }

  async findOne(id: string): Promise<Mantenimiento | null> {
    return await this.mantenimientoRepository.findOneBy({ idMantenimiento: id });
  }

  async update(id: string, updateMantenimientoDto: UpdateMantenimientoDto): Promise<Mantenimiento | null> {
    const mantenimiento = await this.mantenimientoRepository.findOneBy({ idMantenimiento: id });
    if (!mantenimiento) {
      throw new Error('Mantenimiento no se encuentra');
    }
    Object.assign(mantenimiento, updateMantenimientoDto);
    return await this.mantenimientoRepository.save(mantenimiento);
  }

  //TODO DELETE LOCIGAL METHOD PENDING
}
