import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AsignacionClienteIngenieroService } from './asignacion-cliente-ingeniero.service';
import { CreateAsignacionClienteIngenieroDto } from './dto/create-asignacion-cliente-ingeniero.dto';
import { UpdateAsignacionClienteIngenieroDto } from './dto/update-asignacion-cliente-ingeniero.dto';

@Controller('asignacion-cliente-ingeniero')
export class AsignacionClienteIngenieroController {
  constructor(private readonly asignacionClienteIngenieroService: AsignacionClienteIngenieroService) {}

  @Post()
  create(@Body() createAsignacionClienteIngenieroDto: CreateAsignacionClienteIngenieroDto) {
    return this.asignacionClienteIngenieroService.create(createAsignacionClienteIngenieroDto);
  }

  @Get()
  findAll() {
    return this.asignacionClienteIngenieroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.asignacionClienteIngenieroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAsignacionClienteIngenieroDto: UpdateAsignacionClienteIngenieroDto) {
    return this.asignacionClienteIngenieroService.update(+id, updateAsignacionClienteIngenieroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.asignacionClienteIngenieroService.remove(+id);
  }
}
