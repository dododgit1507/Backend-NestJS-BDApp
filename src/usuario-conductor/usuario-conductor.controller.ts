import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { UsuarioConductorService } from './usuario-conductor.service';
import { CreateUsuarioConductorDto } from './dto/create-usuario-conductor.dto';
import { UpdateUsuarioConductorDto } from './dto/update-usuario-conductor.dto';

@Controller('usuario-conductor')
export class UsuarioConductorController {
  constructor(private readonly usuarioConductorService: UsuarioConductorService) {}

  @Post()
  create(@Body() createUsuarioConductorDto: CreateUsuarioConductorDto) {
    return this.usuarioConductorService.create(createUsuarioConductorDto);
  }

  @Get()
  findAll() {
    return this.usuarioConductorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioConductorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioConductorDto: UpdateUsuarioConductorDto) {
    return this.usuarioConductorService.update(id, updateUsuarioConductorDto);
  }
}
