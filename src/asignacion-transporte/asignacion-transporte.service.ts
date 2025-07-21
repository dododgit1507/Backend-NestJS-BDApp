import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAsignacionTransporteDto } from './dto/create-asignacion-transporte.dto';
import { UpdateAsignacionTransporteDto } from './dto/update-asignacion-transporte.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AsignacionTransporte } from './entities/asignacion-transporte.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AsignacionTransporteService {
  constructor(
    @InjectRepository(AsignacionTransporte)
    private asignacionTransporteRepository: Repository<AsignacionTransporte>,
  ) {}

  async create(
    createAsignacionTransporteDto: CreateAsignacionTransporteDto,
  ): Promise<AsignacionTransporte> {
    const { codigoDespacho, idTransporte, idUsuarioConductor, ...rest } =
      createAsignacionTransporteDto;

    const asignacionTransporte = this.asignacionTransporteRepository.create({
      ...rest,
      codigoDespacho: { codigoDespacho },
      idTransporte: { idTransporte },
      idUsuarioConductor: { idUsuarioConductor },
    });

    return this.asignacionTransporteRepository.save(asignacionTransporte);
  }

  async findAll(): Promise<AsignacionTransporte[]> {
    return await this.asignacionTransporteRepository.find();
  }

  async findOne(id: string): Promise<AsignacionTransporte | null> {
    return await this.asignacionTransporteRepository.findOne({
      where: { idAsignacionTransporte: id },
    });
  }

  async update(
    id: string,
    updateAsignacionTransporteDto: UpdateAsignacionTransporteDto,
  ): Promise<AsignacionTransporte> {
    const { codigoDespacho, idTransporte, idUsuarioConductor, ...rest } =
      updateAsignacionTransporteDto;

    const asignacionTransporte =
      await this.asignacionTransporteRepository.preload({
        idAsignacionTransporte: id,
        ...rest,
        codigoDespacho: codigoDespacho ? { codigoDespacho } : undefined,
        idTransporte: idTransporte ? { idTransporte } : undefined,
        idUsuarioConductor: idUsuarioConductor
          ? { idUsuarioConductor }
          : undefined,
      });

    if (!asignacionTransporte) {
      throw new NotFoundException(
        `Asignación de transporte ${id} no encontrada`,
      );
    }

    return this.asignacionTransporteRepository.save(asignacionTransporte);
  }
}
