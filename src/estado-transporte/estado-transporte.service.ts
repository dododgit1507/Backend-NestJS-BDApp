import { Injectable } from '@nestjs/common';
import { CreateEstadoTransporteDto } from './dto/create-estado-transporte.dto';
import { UpdateEstadoTransporteDto } from './dto/update-estado-transporte.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EstadoTransporte } from './entities/estado-transporte.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EstadoTransporteService {

  constructor(@InjectRepository(EstadoTransporte) private estadoTransporteRepository: Repository<EstadoTransporte>) {}

  async create(createEstadoTransporteDto: CreateEstadoTransporteDto): Promise<EstadoTransporte> {
    const estadoTransporte = this.estadoTransporteRepository.create(createEstadoTransporteDto);
    return await this.estadoTransporteRepository.save(estadoTransporte);
  }

  async findAll(): Promise<EstadoTransporte[]> {
    return await this.estadoTransporteRepository.find();
  }

  async findOne(id: number): Promise<EstadoTransporte | null> {
    return await this.estadoTransporteRepository.findOne({ 
      where: { idEstadoTransporte: id.toString() }
     });
  }

  async update(id: number, updateEstadoTransporteDto: UpdateEstadoTransporteDto): Promise<EstadoTransporte | null> {
    const estadoTransporte = await this.estadoTransporteRepository.findOne({ 
      where: { idEstadoTransporte: id.toString() }
    });
    if (!estadoTransporte) {
      throw new Error('Estado de Transporte no encontrado');
    }
    Object.assign(estadoTransporte, updateEstadoTransporteDto);
    return await this.estadoTransporteRepository.save(estadoTransporte);
  }

  //TODO PENDING DELETE LOGICAL METHOD
  async remove(id: number): Promise<void> {
    const estadoTransporte = await this.estadoTransporteRepository.findOne({ 
      where: { idEstadoTransporte: id.toString() }
    });
    if (!estadoTransporte) {
      throw new Error('Estado de Transporte no encontrado');
    }
  }
}
