import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntregaDespachoService } from './entrega-despacho.service';
import { CreateEntregaDespachoDto } from './dto/create-entrega-despacho.dto';
import { UpdateEntregaDespachoDto } from './dto/update-entrega-despacho.dto';

@Controller('entrega-despacho')
export class EntregaDespachoController {
  constructor(private readonly entregaDespachoService: EntregaDespachoService) {}

  @Post()
  create(@Body() createEntregaDespachoDto: CreateEntregaDespachoDto) {
    return this.entregaDespachoService.create(createEntregaDespachoDto);
  }

  @Get()
  findAll() {
    return this.entregaDespachoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entregaDespachoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntregaDespachoDto: UpdateEntregaDespachoDto) {
    return this.entregaDespachoService.update(+id, updateEntregaDespachoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entregaDespachoService.remove(+id);
  }
}
