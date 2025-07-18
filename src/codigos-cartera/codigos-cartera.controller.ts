import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CodigosCarteraService } from './codigos-cartera.service';
import { CreateCodigosCarteraDto } from './dto/create-codigos-cartera.dto';
import { UpdateCodigosCarteraDto } from './dto/update-codigos-cartera.dto';

@Controller('codigos-cartera')
export class CodigosCarteraController {
  constructor(private readonly codigosCarteraService: CodigosCarteraService) {}

  @Post()
  create(@Body() createCodigosCarteraDto: CreateCodigosCarteraDto) {
    return this.codigosCarteraService.create(createCodigosCarteraDto);
  }

  @Get()
  findAll() {
    return this.codigosCarteraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.codigosCarteraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCodigosCarteraDto: UpdateCodigosCarteraDto) {
    return this.codigosCarteraService.update(+id, updateCodigosCarteraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.codigosCarteraService.remove(+id);
  }
}
