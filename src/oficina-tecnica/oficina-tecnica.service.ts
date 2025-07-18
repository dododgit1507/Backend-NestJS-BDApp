import { Injectable } from '@nestjs/common';
import { CreateOficinaTecnicaDto } from './dto/create-oficina-tecnica.dto';
import { UpdateOficinaTecnicaDto } from './dto/update-oficina-tecnica.dto';
import { OficinaTecnica } from './entities/oficina-tecnica.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OficinaTecnicaService {

  constructor(@InjectRepository(OficinaTecnica) private oficinaTecnicaRepository: Repository<OficinaTecnica>) {}

  async create(createOficinaTecnicaDto: CreateOficinaTecnicaDto): Promise<OficinaTecnica> {
    const oficinaTecnica = this.oficinaTecnicaRepository.create(createOficinaTecnicaDto);
    return await this.oficinaTecnicaRepository.save(oficinaTecnica);
  }

  async findAll(): Promise<OficinaTecnica[]> {
    return await this.oficinaTecnicaRepository.find();
  }

  async findOne(id: number): Promise<OficinaTecnica | null> {
    return await this.oficinaTecnicaRepository.findOneBy({ idOficina: id.toString() });
  }

  async update(id: number, updateOficinaTecnicaDto: UpdateOficinaTecnicaDto): Promise<OficinaTecnica> {
    const oficinaTecnica = await this.oficinaTecnicaRepository.findOneBy({ idOficina: id.toString() });
    if (!oficinaTecnica) {
      throw new Error('Oficina Técnica no encontrada');
    }
    Object.assign(oficinaTecnica, updateOficinaTecnicaDto);
    return await this.oficinaTecnicaRepository.save(oficinaTecnica);
  }

  async remove(id: number): Promise<void> {
    await this.oficinaTecnicaRepository.delete({ idOficina: id.toString() });
  }
}
