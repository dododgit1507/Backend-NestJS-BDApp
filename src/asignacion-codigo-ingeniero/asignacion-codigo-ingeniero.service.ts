import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAsignacionCodigoIngenieroDto } from './dto/create-asignacion-codigo-ingeniero.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AsignacionCodigoIngeniero } from './entities/asignacion-codigo-ingeniero.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AsignacionCodigoIngenieroService {

  constructor(@InjectRepository(AsignacionCodigoIngeniero) private asignacionCodigoIngenieroRepository: Repository<AsignacionCodigoIngeniero>) {}

  async create(createAsignacionCodigoIngenieroDto: CreateAsignacionCodigoIngenieroDto): Promise<AsignacionCodigoIngeniero> {
    const asignacionCodigoIngeniero = this.asignacionCodigoIngenieroRepository.create(createAsignacionCodigoIngenieroDto);
    return await this.asignacionCodigoIngenieroRepository.save(asignacionCodigoIngeniero);
  }

  async findAll():Promise<AsignacionCodigoIngeniero[]> {
    return await this.asignacionCodigoIngenieroRepository.find();
  }

  async remove(idIngeniero: string, idCodigo: string): Promise<void> {
    const asignacion = await this.asignacionCodigoIngenieroRepository.findOne({
      where: { id_ingeniero: idIngeniero, id_codigo: idCodigo },
    });

    if (!asignacion) {
      throw new NotFoundException('Asignación no encontrada');
    }

    await this.asignacionCodigoIngenieroRepository.remove(asignacion);
  }
}
