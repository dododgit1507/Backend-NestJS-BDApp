import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioConductorDto } from './dto/create-usuario-conductor.dto';
import { UpdateUsuarioConductorDto } from './dto/update-usuario-conductor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioConductor } from './entities/usuario-conductor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioConductorService {
  constructor(
    @InjectRepository(UsuarioConductor)
    private usuarioConductorRepository: Repository<UsuarioConductor>,
  ) {}

  async create(
    createUsuarioConductorDto: CreateUsuarioConductorDto,
  ): Promise<UsuarioConductor> {
    const usuarioConductor = this.usuarioConductorRepository.create(
      createUsuarioConductorDto,
    );
    return await this.usuarioConductorRepository.save(usuarioConductor);
  }

  async findAll(): Promise<UsuarioConductor[]> {
    return await this.usuarioConductorRepository.find();
  }

  async findOne(id: string): Promise<UsuarioConductor | null> {
    return await this.usuarioConductorRepository.findOneBy({
      idUsuarioConductor: id,
    });
  }

  async update(
    id: string,
    updateUsuarioConductorDto: UpdateUsuarioConductorDto,
  ): Promise<UsuarioConductor> {
    const usuarioConductor = await this.usuarioConductorRepository.findOneBy({
      idUsuarioConductor: id,
    });
    if (!usuarioConductor) {
      throw new NotFoundException('Usuario Conductor no encontrado');
    }
    Object.assign(usuarioConductor, updateUsuarioConductorDto);
    return await this.usuarioConductorRepository.save(usuarioConductor);
  }
}
