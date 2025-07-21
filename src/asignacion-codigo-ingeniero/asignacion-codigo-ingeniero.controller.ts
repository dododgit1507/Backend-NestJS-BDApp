import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AsignacionCodigoIngenieroService } from './asignacion-codigo-ingeniero.service';
import { CreateAsignacionCodigoIngenieroDto } from './dto/create-asignacion-codigo-ingeniero.dto';

@Controller('asignacion-codigo-ingeniero')
export class AsignacionCodigoIngenieroController {
  constructor(private readonly asignacionCodigoIngenieroService: AsignacionCodigoIngenieroService) {}

  @Post()
  create(@Body() createAsignacionCodigoIngenieroDto: CreateAsignacionCodigoIngenieroDto) {
    return this.asignacionCodigoIngenieroService.create(createAsignacionCodigoIngenieroDto);
  }

  @Get()
  findAll() {
    return this.asignacionCodigoIngenieroService.findAll();
  }

  @Delete(':idIngeniero/:idCodigo')
  remove(
    @Param('idIngeniero') idIngeniero: string,
    @Param('idCodigo') idCodigo: string
  ) {
    return this.asignacionCodigoIngenieroService.remove(idIngeniero, idCodigo);
  }
}
