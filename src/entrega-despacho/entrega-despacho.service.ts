import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEntregaDespachoDto } from './dto/create-entrega-despacho.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EntregaDespacho } from './entities/entrega-despacho.entity';
import { Repository } from 'typeorm';
import { UpdateEntregaDespachoDto } from './dto/update-entrega-despacho.dto';

@Injectable()
export class EntregaDespachoService {

  constructor(@InjectRepository(EntregaDespacho) private entregaDespachoRepository: Repository<EntregaDespacho>) {}

  async create(createEntregaDespachoDto: CreateEntregaDespachoDto): Promise<EntregaDespacho> {
  const entregaDespacho = this.entregaDespachoRepository.create({
    ...createEntregaDespachoDto,
    idAsignacionTransporte: {
      idAsignacionTransporte: createEntregaDespachoDto.idAsignacionTransporte,
    },
  });

  return await this.entregaDespachoRepository.save(entregaDespacho);
}

  async findAll(): Promise<EntregaDespacho[]> {
    return await this.entregaDespachoRepository.find();
  }

  async findOne(id: string): Promise<EntregaDespacho | null> {
    return await this.entregaDespachoRepository.findOneBy({ idEntregaDespacho: id });
  }

  async update(id: string, updateEntregaDespachoDto: UpdateEntregaDespachoDto): Promise<EntregaDespacho> {
  // Remove idEntregaDespacho from updateEntregaDespachoDto to avoid duplicate property
  const entregaDespacho = await this.entregaDespachoRepository.findOneBy({ idEntregaDespacho: id });
  if (!entregaDespacho) {
    throw new NotFoundException('Entrega de Despacho no encontrada');
  }
  Object.assign(entregaDespacho, updateEntregaDespachoDto);
  return await this.entregaDespachoRepository.save(entregaDespacho);
}

}
