import { Module } from '@nestjs/common';
import { AsignacionTransporteService } from './asignacion-transporte.service';
import { AsignacionTransporteController } from './asignacion-transporte.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsignacionTransporte } from './entities/asignacion-transporte.entity';

@Module({
  controllers: [AsignacionTransporteController],
  providers: [AsignacionTransporteService],
  imports: [TypeOrmModule.forFeature([AsignacionTransporte])], // Specify the entities related to this module
  exports: [AsignacionTransporteService],
})
export class AsignacionTransporteModule {}
