import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { OficinaTecnicaService } from './oficina-tecnica.service';
import { CreateOficinaTecnicaDto } from './dto/create-oficina-tecnica.dto';
import { UpdateOficinaTecnicaDto } from './dto/update-oficina-tecnica.dto';

@Controller('oficinaTecnica')
export class OficinaTecnicaController {
  constructor(private readonly oficinaTecnicaService: OficinaTecnicaService) {}

  @Post()
  create(@Body() createOficinaTecnicaDto: CreateOficinaTecnicaDto) {
    return this.oficinaTecnicaService.create(createOficinaTecnicaDto);
  }

  @Get()
  findAll() {
    return this.oficinaTecnicaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.oficinaTecnicaService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateOficinaTecnicaDto: UpdateOficinaTecnicaDto) {
    return this.oficinaTecnicaService.update(+id, updateOficinaTecnicaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.oficinaTecnicaService.remove(+id);
  }
}
