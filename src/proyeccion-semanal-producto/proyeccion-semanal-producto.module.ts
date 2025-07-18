import { Module } from '@nestjs/common';
import { ProyeccionSemanalProductoService } from './proyeccion-semanal-producto.service';
import { ProyeccionSemanalProductoController } from './proyeccion-semanal-producto.controller';
import { ProyeccionSemanalProducto } from './entities/proyeccion-semanal-producto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ProyeccionSemanalProductoController],
  providers: [ProyeccionSemanalProductoService],
  imports: [TypeOrmModule.forFeature([ProyeccionSemanalProducto])],
  exports: [ProyeccionSemanalProductoService],
})
export class ProyeccionSemanalProductoModule {}
