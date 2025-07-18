import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { ModalidadTransporteService } from './modalidad-transporte.service';
import { CreateModalidadTransporteDto } from './dto/create-modalidad-transporte.dto';
import { UpdateModalidadTransporteDto } from './dto/update-modalidad-transporte.dto';

@Controller('modalidad-transporte')
export class ModalidadTransporteController {
  constructor(private readonly modalidadTransporteService: ModalidadTransporteService) {}

  @Post()
  create(@Body() createModalidadTransporteDto: CreateModalidadTransporteDto) {
    return this.modalidadTransporteService.create(createModalidadTransporteDto);
  }

  @Get()
  findAll() {
    return this.modalidadTransporteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modalidadTransporteService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateModalidadTransporteDto: UpdateModalidadTransporteDto) {
    return this.modalidadTransporteService.update(+id, updateModalidadTransporteDto);
  }

}
