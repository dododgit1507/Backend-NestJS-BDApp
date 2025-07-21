import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransportesDto } from './dto/create-transporte.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Transportes } from './entities/transporte.entity';
import { Repository } from 'typeorm';
import { UpdateTransporteDto } from './dto/update-transporte.dto';

@Injectable()
export class TransportesService {
  constructor(
    @InjectRepository(Transportes)
    private transportesRepository: Repository<Transportes>,
  ) {}

  async create(
    createTransporteDto: CreateTransportesDto,
  ): Promise<Transportes> {
    const {
      idEstadoTransporte,
      idModalidadTransporte,
      idPropietario,
      idTipoTransporte,
      ...rest
    } = createTransporteDto;

    const transporte = this.transportesRepository.create({
      ...rest,
      idEstadoTransporte: { idEstadoTransporte },
      idModalidadTransporte: { idModalidadTransporte },
      idPropietario: { idPropietario },
      idTipoTransporte: { idTipoTransporte },
    });

    return this.transportesRepository.save(transporte);
  }

  async findAll(): Promise<Transportes[]> {
    return this.transportesRepository.find();
  }

  async findOne(id: string): Promise<Transportes | null> {
    return this.transportesRepository.findOne({ where: { idTransporte: id } });
  }

  async update(
    id: string,
    updateTransporteDto: UpdateTransporteDto,
  ): Promise<Transportes> {
    const {
      idEstadoTransporte,
      idModalidadTransporte,
      idPropietario,
      idTipoTransporte,
      ...rest
    } = updateTransporteDto;

    const transporte = await this.transportesRepository.preload({
      idTransporte: id,
      ...rest,
      idEstadoTransporte: idEstadoTransporte
        ? { idEstadoTransporte }
        : undefined,
      idModalidadTransporte: idModalidadTransporte
        ? { idModalidadTransporte }
        : undefined,
      idPropietario: idPropietario ? { idPropietario } : undefined,
      idTipoTransporte: idTipoTransporte ? { idTipoTransporte } : undefined,
    });

    if (!transporte) {
      throw new NotFoundException(`Transporte ${id} no encontrado`);
    }

    return this.transportesRepository.save(transporte);
  }
}
