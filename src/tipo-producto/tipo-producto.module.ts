import { Module } from '@nestjs/common';
import { TipoProductoService } from './tipo-producto.service';
import { TipoProductoController } from './tipo-producto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoProducto } from './entities/tipo-producto.entity';

@Module({
  controllers: [TipoProductoController],
  providers: [TipoProductoService],
  imports: [TypeOrmModule.forFeature([TipoProducto])],
  exports: [TipoProductoService],
})
export class TipoProductoModule {}
