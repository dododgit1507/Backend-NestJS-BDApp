import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProyeccionSemanalService } from './proyeccion-semanal.service';
import { CreateProyeccionSemanalDto } from './dto/create-proyeccion-semanal.dto';
import { UpdateProyeccionSemanalDto } from './dto/update-proyeccion-semanal.dto';

@Controller('proyeccion-semanal')
export class ProyeccionSemanalController {
  constructor(private readonly proyeccionSemanalService: ProyeccionSemanalService) {}

  @Post()
  create(@Body() createProyeccionSemanalDto: CreateProyeccionSemanalDto) {
    return this.proyeccionSemanalService.create(createProyeccionSemanalDto);
  }

  @Get()
  findAll() {
    return this.proyeccionSemanalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proyeccionSemanalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProyeccionSemanalDto: UpdateProyeccionSemanalDto) {
    return this.proyeccionSemanalService.update(+id, updateProyeccionSemanalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proyeccionSemanalService.remove(+id);
  }
}
