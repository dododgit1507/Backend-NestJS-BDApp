import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuditoriaDto } from './dto/create-auditoria.dto';
import { UpdateAuditoriaDto } from './dto/update-auditoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Auditoria } from './entities/auditoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuditoriaService {
  constructor(
    @InjectRepository(Auditoria)
    private auditoriaRepository: Repository<Auditoria>,
  ) {}

  async create(createAuditoriaDto: CreateAuditoriaDto): Promise<Auditoria> {
    const { codigoDespacho, idCliente, idIngeniero, idProyecto, ...rest } =
      createAuditoriaDto;

    const auditoria = this.auditoriaRepository.create({
      ...rest,
      codigoDespacho: { codigoDespacho },
      idCliente: { idCliente },
      idIngeniero: { idIngeniero },
      idProyecto: { idProyecto },
    });

    return this.auditoriaRepository.save(auditoria);
  }
  async findAll(): Promise<Auditoria[]> {
    return this.auditoriaRepository.find();
  }

  async findOne(id: number): Promise<Auditoria | null> {
    return this.auditoriaRepository.findOne({ where: { idAuditoria: id } });
  }
  async update(
    id: number,
    updateAuditoriaDto: UpdateAuditoriaDto,
  ): Promise<Auditoria> {
    const { codigoDespacho, idCliente, idIngeniero, idProyecto, ...rest } =
      updateAuditoriaDto;

    const auditoria = await this.auditoriaRepository.preload({
      idAuditoria: id,
      ...rest,
      codigoDespacho: codigoDespacho ? { codigoDespacho } : undefined,
      idCliente: idCliente ? { idCliente } : undefined,
      idIngeniero: idIngeniero ? { idIngeniero } : undefined,
      idProyecto: idProyecto ? { idProyecto } : undefined,
    });

    if (!auditoria) {
      throw new NotFoundException(`Auditoría con ID ${id} no encontrada`);
    }

    return this.auditoriaRepository.save(auditoria);
  }
}
