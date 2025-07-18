import { Injectable } from '@nestjs/common';
import { CreateTipoTransporteDto } from './dto/create-tipo-transporte.dto';
import { UpdateTipoTransporteDto } from './dto/update-tipo-transporte.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoTransporte } from './entities/tipo-transporte.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TipoTransporteService {

  constructor(@InjectRepository(TipoTransporte) private tipoTransporteRepository: Repository<TipoTransporte>) {}

  async create(createTipoTransporteDto: CreateTipoTransporteDto): Promise<TipoTransporte> {
    const tipoTransporte = this.tipoTransporteRepository.create(createTipoTransporteDto);
    return await this.tipoTransporteRepository.save(tipoTransporte);
  }

  async findAll(): Promise<TipoTransporte[]> {
    return await this.tipoTransporteRepository.find();
  }

  async findOne(id: number): Promise<TipoTransporte | null> {
    return await this.tipoTransporteRepository.findOne({ where: { idTipoTransporte: id.toString() } });
  }

  async update(id: number, updateTipoTransporteDto: UpdateTipoTransporteDto): Promise<TipoTransporte | null> {
    const tipoTransporte = await this.tipoTransporteRepository.findOne({ where: { idTipoTransporte: id.toString() } });
    if (!tipoTransporte) {
      return null;
    }
    Object.assign(tipoTransporte, updateTipoTransporteDto);
    return await this.tipoTransporteRepository.save(tipoTransporte);
  }

  //TODO PENDING DELETE LOGICAL METHOD
}
