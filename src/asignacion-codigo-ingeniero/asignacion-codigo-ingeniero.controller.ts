import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AsignacionCodigoIngenieroService } from './asignacion-codigo-ingeniero.service';
import { CreateAsignacionCodigoIngenieroDto } from './dto/create-asignacion-codigo-ingeniero.dto';
import { UpdateAsignacionCodigoIngenieroDto } from './dto/update-asignacion-codigo-ingeniero.dto';

@Controller('asignacion-codigo-ingeniero')
export class AsignacionCodigoIngenieroController {
  constructor(private readonly asignacionCodigoIngenieroService: AsignacionCodigoIngenieroService) {}

  @Post()
  create(@Body() createAsignacionCodigoIngenieroDto: CreateAsignacionCodigoIngenieroDto) {
    return this.asignacionCodigoIngenieroService.create(createAsignacionCodigoIngenieroDto);
  }

  @Get()
  findAll() {
    return this.asignacionCodigoIngenieroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.asignacionCodigoIngenieroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAsignacionCodigoIngenieroDto: UpdateAsignacionCodigoIngenieroDto) {
    return this.asignacionCodigoIngenieroService.update(+id, updateAsignacionCodigoIngenieroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.asignacionCodigoIngenieroService.remove(+id);
  }
}
