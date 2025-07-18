import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { EstadoTransporteService } from './estado-transporte.service';
import { CreateEstadoTransporteDto } from './dto/create-estado-transporte.dto';
import { UpdateEstadoTransporteDto } from './dto/update-estado-transporte.dto';

@Controller('estadoTransporte')
export class EstadoTransporteController {
  constructor(private readonly estadoTransporteService: EstadoTransporteService) {}

  @Post()
  create(@Body() createEstadoTransporteDto: CreateEstadoTransporteDto) {
    return this.estadoTransporteService.create(createEstadoTransporteDto);
  }

  @Get()
  findAll() {
    return this.estadoTransporteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estadoTransporteService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateEstadoTransporteDto: UpdateEstadoTransporteDto) {
    return this.estadoTransporteService.update(+id, updateEstadoTransporteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estadoTransporteService.remove(+id);
  }
}
