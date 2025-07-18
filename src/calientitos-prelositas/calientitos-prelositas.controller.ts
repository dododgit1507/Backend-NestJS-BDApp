import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CalientitosPrelositasService } from './calientitos-prelositas.service';
import { CreateCalientitosPrelositaDto } from './dto/create-calientitos-prelosita.dto';
import { UpdateCalientitosPrelositaDto } from './dto/update-calientitos-prelosita.dto';

@Controller('calientitos-prelositas')
export class CalientitosPrelositasController {
  constructor(private readonly calientitosPrelositasService: CalientitosPrelositasService) {}

  @Post()
  create(@Body() createCalientitosPrelositaDto: CreateCalientitosPrelositaDto) {
    return this.calientitosPrelositasService.create(createCalientitosPrelositaDto);
  }

  @Get()
  findAll() {
    return this.calientitosPrelositasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.calientitosPrelositasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCalientitosPrelositaDto: UpdateCalientitosPrelositaDto) {
    return this.calientitosPrelositasService.update(+id, updateCalientitosPrelositaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.calientitosPrelositasService.remove(+id);
  }
}
