import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { AuditoriaService } from './auditoria.service';
import { CreateAuditoriaDto } from './dto/create-auditoria.dto';
import { UpdateAuditoriaDto } from './dto/update-auditoria.dto';

@Controller('auditoria')
export class AuditoriaController {
  constructor(private readonly auditoriaService: AuditoriaService) {}

  @Post()
  create(@Body() createAuditoriaDto: CreateAuditoriaDto) {
    return this.auditoriaService.create(createAuditoriaDto);
  }

  @Get()
  findAll() {
    return this.auditoriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.auditoriaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuditoriaDto: UpdateAuditoriaDto) {
    return this.auditoriaService.update(+id, updateAuditoriaDto);
  }

}
