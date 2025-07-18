import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IngenieroProyectoService } from './ingeniero-proyecto.service';
import { CreateIngenieroProyectoDto } from './dto/create-ingeniero-proyecto.dto';
import { UpdateIngenieroProyectoDto } from './dto/update-ingeniero-proyecto.dto';

@Controller('ingeniero-proyecto')
export class IngenieroProyectoController {
  constructor(private readonly ingenieroProyectoService: IngenieroProyectoService) {}

  @Post()
  create(@Body() createIngenieroProyectoDto: CreateIngenieroProyectoDto) {
    return this.ingenieroProyectoService.create(createIngenieroProyectoDto);
  }

  @Get()
  findAll() {
    return this.ingenieroProyectoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingenieroProyectoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIngenieroProyectoDto: UpdateIngenieroProyectoDto) {
    return this.ingenieroProyectoService.update(+id, updateIngenieroProyectoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingenieroProyectoService.remove(+id);
  }
}
