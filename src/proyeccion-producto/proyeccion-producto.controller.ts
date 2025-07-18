import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProyeccionProductoService } from './proyeccion-producto.service';
import { CreateProyeccionProductoDto } from './dto/create-proyeccion-producto.dto';
import { UpdateProyeccionProductoDto } from './dto/update-proyeccion-producto.dto';

@Controller('proyeccion-producto')
export class ProyeccionProductoController {
  constructor(private readonly proyeccionProductoService: ProyeccionProductoService) {}

  @Post()
  create(@Body() createProyeccionProductoDto: CreateProyeccionProductoDto) {
    return this.proyeccionProductoService.create(createProyeccionProductoDto);
  }

  @Get()
  findAll() {
    return this.proyeccionProductoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proyeccionProductoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProyeccionProductoDto: UpdateProyeccionProductoDto) {
    return this.proyeccionProductoService.update(+id, updateProyeccionProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proyeccionProductoService.remove(+id);
  }
}
