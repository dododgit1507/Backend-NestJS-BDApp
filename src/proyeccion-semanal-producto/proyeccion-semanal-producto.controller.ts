import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { ProyeccionSemanalProductoService } from './proyeccion-semanal-producto.service';
import { CreateProyeccionSemanalProductoDto } from './dto/create-proyeccion-semanal-producto.dto';
import { UpdateProyeccionSemanalProductoDto } from './dto/update-proyeccion-semanal-producto.dto';

@Controller('proyeccionSemanaProducto')
export class ProyeccionSemanalProductoController {
  constructor(private readonly proyeccionSemanalProductoService: ProyeccionSemanalProductoService) {}

  @Post()
  create(@Body() createProyeccionSemanalProductoDto: CreateProyeccionSemanalProductoDto) {
    return this.proyeccionSemanalProductoService.create(createProyeccionSemanalProductoDto);
  }

  @Get()
  findAll() {
    return this.proyeccionSemanalProductoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proyeccionSemanalProductoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProyeccionSemanalProductoDto: UpdateProyeccionSemanalProductoDto) {
    return this.proyeccionSemanalProductoService.update(+id, updateProyeccionSemanalProductoDto);
  }
}
