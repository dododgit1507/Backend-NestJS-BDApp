import { Module } from '@nestjs/common';
import { ProyeccionSemanalService } from './proyeccion-semanal.service';
import { ProyeccionSemanalController } from './proyeccion-semanal.controller';
import { ProyeccionSemanal } from './entities/proyeccion-semanal.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ProyeccionSemanalController],
  providers: [ProyeccionSemanalService],
  imports: [TypeOrmModule.forFeature([ProyeccionSemanal])],
  exports: [ProyeccionSemanalService],
})
export class ProyeccionSemanalModule {}
