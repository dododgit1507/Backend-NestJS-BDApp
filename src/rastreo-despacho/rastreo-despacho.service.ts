import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRastreoDespachoDto } from './dto/create-rastreo-despacho.dto';
import { UpdateRastreoDespachoDto } from './dto/update-rastreo-despacho.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RastreoDespacho } from './entities/rastreo-despacho.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RastreoDespachoService {
  constructor(
    @InjectRepository(RastreoDespacho)
    private rastreoDespachoRepository: Repository<RastreoDespacho>,
  ) {}

  async create(createRastreoDespachoDto: CreateRastreoDespachoDto) {
  const { idAsignacionTransporte, ...rest } = createRastreoDespachoDto;

  const rastreoDespacho = this.rastreoDespachoRepository.create({
    ...rest,
    idAsignacionTransporte: { idAsignacionTransporte },
  });

  return await this.rastreoDespachoRepository.save(rastreoDespacho);
}


  async findAll(): Promise<RastreoDespacho[]> {
    return await this.rastreoDespachoRepository.find();
  }

  async findOne(id: string): Promise<RastreoDespacho | null> {
    return await this.rastreoDespachoRepository.findOne({ where: { idRastreo: id } });
  }

  async update(id: string, updateRastreoDespachoDto: UpdateRastreoDespachoDto) {
  const { idAsignacionTransporte, ...rest } = updateRastreoDespachoDto;

  const rastreoDespacho = await this.rastreoDespachoRepository.preload({
    idRastreo: id,
    ...rest,
    idAsignacionTransporte: idAsignacionTransporte
      ? { idAsignacionTransporte }
      : undefined,
  });

  if (!rastreoDespacho) {
    throw new NotFoundException(`RastreoDespacho ${id} no encontrado`);
  }

  // Si viene fechaHora como string, asegúrate de convertirlo:
  if (rastreoDespacho.fechaHora && typeof rastreoDespacho.fechaHora === 'string') {
    rastreoDespacho.fechaHora = new Date(rastreoDespacho.fechaHora);
  }

  return this.rastreoDespachoRepository.save(rastreoDespacho);
}


  
}
