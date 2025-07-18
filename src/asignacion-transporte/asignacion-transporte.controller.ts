import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AsignacionTransporteService } from './asignacion-transporte.service';
import { CreateAsignacionTransporteDto } from './dto/create-asignacion-transporte.dto';
import { UpdateAsignacionTransporteDto } from './dto/update-asignacion-transporte.dto';

@Controller('asignacion-transporte')
export class AsignacionTransporteController {
  constructor(private readonly asignacionTransporteService: AsignacionTransporteService) {}

  @Post()
  create(@Body() createAsignacionTransporteDto: CreateAsignacionTransporteDto) {
    return this.asignacionTransporteService.create(createAsignacionTransporteDto);
  }

  @Get()
  findAll() {
    return this.asignacionTransporteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.asignacionTransporteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAsignacionTransporteDto: UpdateAsignacionTransporteDto) {
    return this.asignacionTransporteService.update(+id, updateAsignacionTransporteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.asignacionTransporteService.remove(+id);
  }
}
