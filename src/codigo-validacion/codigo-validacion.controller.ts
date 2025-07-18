import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CodigoValidacionService } from './codigo-validacion.service';
import { CreateCodigoValidacionDto } from './dto/create-codigo-validacion.dto';
import { UpdateCodigoValidacionDto } from './dto/update-codigo-validacion.dto';

@Controller('codigo-validacion')
export class CodigoValidacionController {
  constructor(private readonly codigoValidacionService: CodigoValidacionService) {}

  @Post()
  create(@Body() createCodigoValidacionDto: CreateCodigoValidacionDto) {
    return this.codigoValidacionService.create(createCodigoValidacionDto);
  }

  @Get()
  findAll() {
    return this.codigoValidacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.codigoValidacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCodigoValidacionDto: UpdateCodigoValidacionDto) {
    return this.codigoValidacionService.update(+id, updateCodigoValidacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.codigoValidacionService.remove(+id);
  }
}
