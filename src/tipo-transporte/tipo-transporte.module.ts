import { Module } from '@nestjs/common';
import { TipoTransporteService } from './tipo-transporte.service';
import { TipoTransporteController } from './tipo-transporte.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoTransporte } from './entities/tipo-transporte.entity';

@Module({
  controllers: [TipoTransporteController],
  providers: [TipoTransporteService],
  imports: [TypeOrmModule.forFeature([TipoTransporte])], // Specify the entities related to this module
  exports: [TipoTransporteService],
})
export class TipoTransporteModule {}
