import { Injectable } from '@nestjs/common';
import { CreatePropietarioDto } from './dto/create-propietario.dto';
import { UpdatePropietarioDto } from './dto/update-propietario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Propietario } from './entities/propietario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PropietarioService {

  constructor(@InjectRepository(Propietario) private propietarioRepository: Repository<Propietario>) {}

  async create(createPropietarioDto: CreatePropietarioDto): Promise<Propietario> {
    const propietario = this.propietarioRepository.create(createPropietarioDto);
    return await this.propietarioRepository.save(propietario);
  }

  async findAll(): Promise<Propietario[]> {
    return await this.propietarioRepository.find();
  }

  async findOne(id: string): Promise<Propietario | null> {
    return await this.propietarioRepository.findOne({ where: { idPropietario: id } });
  }

  async update(id: string, updatePropietarioDto: UpdatePropietarioDto): Promise<Propietario | null> {
    const propietario = await this.propietarioRepository.findOne({ where: { idPropietario: id } });
    if (!propietario) {
      return null;
    }
    Object.assign(propietario, updatePropietarioDto);
    return await this.propietarioRepository.save(propietario);
  }
}
