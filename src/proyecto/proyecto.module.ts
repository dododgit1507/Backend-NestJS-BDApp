import { Module } from '@nestjs/common';
import { ProyectoService } from './proyecto.service';
import { ProyectoController } from './proyecto.controller';
import { Proyecto } from './entities/proyecto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ProyectoController],
  providers: [ProyectoService],
  imports: [TypeOrmModule.forFeature([Proyecto])],
  exports: [ProyectoService],
})
export class ProyectoModule {}
