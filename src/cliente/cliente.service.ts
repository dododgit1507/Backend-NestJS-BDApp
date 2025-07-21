import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente) private clienteRepository: Repository<Cliente>,
  ) {}

  async create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    const cliente = this.clienteRepository.create(createClienteDto);
    return await this.clienteRepository.save(cliente);
  }

  async findAll(): Promise<Cliente[]> {
    return await this.clienteRepository.find();
  }

  async findOne(id: string): Promise<Cliente | null> {
    return await this.clienteRepository.findOne({ where: { idCliente: id } });
  }

  async update(
    id: string,
    updateClienteDto: UpdateClienteDto,
  ): Promise<Cliente> {
    const cliente = await this.clienteRepository.findOne({
      where: { idCliente: id },
    });
    if (!cliente) {
      throw new Error('Cliente no encontrado');
    }
    Object.assign(cliente, updateClienteDto);
    return await this.clienteRepository.save(cliente);
  }

  //TODO DELETE LOGICAL METHOD PENDING
}
