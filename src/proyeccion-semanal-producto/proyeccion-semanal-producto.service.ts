import { Injectable } from '@nestjs/common';
import { CreateProyeccionSemanalProductoDto } from './dto/create-proyeccion-semanal-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProyeccionSemanalProducto } from './entities/proyeccion-semanal-producto.entity';
import { Repository } from 'typeorm';
import { UpdateProyeccionSemanalProductoDto } from './dto/update-proyeccion-semanal-producto.dto';

@Injectable()
export class ProyeccionSemanalProductoService {

  constructor(@InjectRepository(ProyeccionSemanalProducto) private proyeccionSemanalProductoRepository: Repository<ProyeccionSemanalProducto>) {}

  async create(createProyeccionSemanalProductoDto: CreateProyeccionSemanalProductoDto): Promise<ProyeccionSemanalProducto> {
    const proyeccionSemanalProducto = new ProyeccionSemanalProducto();
    
    proyeccionSemanalProducto.numeroSemana = createProyeccionSemanalProductoDto.numeroSemana;
    proyeccionSemanalProducto.fecha = createProyeccionSemanalProductoDto.fecha;
    proyeccionSemanalProducto.metrosCuadrados = createProyeccionSemanalProductoDto.metrosCuadrados ?? null;
    proyeccionSemanalProducto.idProyeccionProductoFk = createProyeccionSemanalProductoDto.idProyeccionProducto;
    
    return await this.proyeccionSemanalProductoRepository.save(proyeccionSemanalProducto);
  }

  async findAll(): Promise<ProyeccionSemanalProducto[]> {
    return await this.proyeccionSemanalProductoRepository.find();
  }

  async findOne(id: number): Promise<ProyeccionSemanalProducto | null> {
    return await this.proyeccionSemanalProductoRepository.findOneBy({ idProyeccionSemanalProducto: id });
  }
  

  async update(id: number, updateProyeccionSemanalProductoDto: UpdateProyeccionSemanalProductoDto): Promise<ProyeccionSemanalProducto> {
    const proyeccionsemanalProducto = await this.proyeccionSemanalProductoRepository.findOneBy({ idProyeccionSemanalProducto: id });
    if (!proyeccionsemanalProducto) {
      throw new Error('Proyección Semanal Producto no encontrada');
    }
    Object.assign(proyeccionsemanalProducto, updateProyeccionSemanalProductoDto);
    return this.proyeccionSemanalProductoRepository.save(proyeccionsemanalProducto);
  
  }


  //TODO PENDING LOGICAL DELETE
}
