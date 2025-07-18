import { Module } from '@nestjs/common';
import { ProyeccionProductoService } from './proyeccion-producto.service';
import { ProyeccionProductoController } from './proyeccion-producto.controller';
import { ProyeccionProducto } from './entities/proyeccion-producto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ProyeccionProductoController],
  providers: [ProyeccionProductoService],
  imports: [TypeOrmModule.forFeature([ProyeccionProducto])],
  exports: [ProyeccionProductoService],
})
export class ProyeccionProductoModule {}
