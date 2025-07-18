import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { TipoTransporteService } from './tipo-transporte.service';
import { CreateTipoTransporteDto } from './dto/create-tipo-transporte.dto';
import { UpdateTipoTransporteDto } from './dto/update-tipo-transporte.dto';

@Controller('tipo-transporte')
export class TipoTransporteController {
  constructor(private readonly tipoTransporteService: TipoTransporteService) {}

  @Post()
  create(@Body() createTipoTransporteDto: CreateTipoTransporteDto) {
    return this.tipoTransporteService.create(createTipoTransporteDto);
  }

  @Get()
  findAll() {
    return this.tipoTransporteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoTransporteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoTransporteDto: UpdateTipoTransporteDto) {
    return this.tipoTransporteService.update(+id, updateTipoTransporteDto);
  }

}
