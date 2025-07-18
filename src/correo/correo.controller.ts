import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CorreoService } from './correo.service';
import { CreateCorreoDto } from './dto/create-correo.dto';
import { UpdateCorreoDto } from './dto/update-correo.dto';

@Controller('correo')
export class CorreoController {
  constructor(private readonly correoService: CorreoService) {}

  @Post()
  create(@Body() createCorreoDto: CreateCorreoDto) {
    return this.correoService.create(createCorreoDto);
  }

  @Get()
  findAll() {
    return this.correoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.correoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCorreoDto: UpdateCorreoDto) {
    return this.correoService.update(+id, updateCorreoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.correoService.remove(+id);
  }
}
