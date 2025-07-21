import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { RastreoDespachoService } from './rastreo-despacho.service';
import { CreateRastreoDespachoDto } from './dto/create-rastreo-despacho.dto';
import { UpdateRastreoDespachoDto } from './dto/update-rastreo-despacho.dto';

@Controller('rastreo-despacho')
export class RastreoDespachoController {
  constructor(private readonly rastreoDespachoService: RastreoDespachoService) {}

  @Post()
  create(@Body() createRastreoDespachoDto: CreateRastreoDespachoDto) {
    return this.rastreoDespachoService.create(createRastreoDespachoDto);
  }

  @Get()
  findAll() {
    return this.rastreoDespachoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rastreoDespachoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRastreoDespachoDto: UpdateRastreoDespachoDto) {
    return this.rastreoDespachoService.update(id, updateRastreoDespachoDto);
  }

}
