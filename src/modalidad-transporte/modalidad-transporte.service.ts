import { Injectable } from '@nestjs/common';
import { CreateModalidadTransporteDto } from './dto/create-modalidad-transporte.dto';
import { UpdateModalidadTransporteDto } from './dto/update-modalidad-transporte.dto';
import { ModalidadTransporte } from './entities/modalidad-transporte.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ModalidadTransporteService {

  constructor(@InjectRepository(ModalidadTransporte) private modalidadTransporteRepository: Repository<ModalidadTransporte>) {}

  create(createModalidadTransporteDto: CreateModalidadTransporteDto): Promise<ModalidadTransporte> {
    const modalidadTransporte = this.modalidadTransporteRepository.create(createModalidadTransporteDto);
    return this.modalidadTransporteRepository.save(modalidadTransporte);
  }

  findAll(): Promise<ModalidadTransporte[]> {
    return this.modalidadTransporteRepository.find();
  }

  findOne(id: number): Promise<ModalidadTransporte | null> {
    return this.modalidadTransporteRepository.findOne({ where: { idModalidadTransporte: id.toString() } });
  }

  async update(id: number, updateModalidadTransporteDto: UpdateModalidadTransporteDto): Promise<ModalidadTransporte > {
    const updateModalidadTransporte = await this.modalidadTransporteRepository.findOne({ where: { idModalidadTransporte: id.toString() } });
    if (!updateModalidadTransporte) {
      throw new Error('Modalidad de Transporte no encontrada');
    }
    Object.assign(updateModalidadTransporte, updateModalidadTransporteDto);
    return await this.modalidadTransporteRepository.save(updateModalidadTransporte);
  }

  //TODO PENDING DELETE LOGICAL METHOD
}
