import { Module } from '@nestjs/common';
import { EstadoTransporteService } from './estado-transporte.service';
import { EstadoTransporteController } from './estado-transporte.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadoTransporte } from './entities/estado-transporte.entity';

@Module({
  controllers: [EstadoTransporteController],
  providers: [EstadoTransporteService],
  imports: [TypeOrmModule.forFeature([EstadoTransporte])], // Specify the entities related to this module
  exports: [EstadoTransporteService], // Export the service if it needs to be used
})
export class EstadoTransporteModule {}
