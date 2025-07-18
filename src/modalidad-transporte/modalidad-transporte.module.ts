import { Module } from '@nestjs/common';
import { ModalidadTransporteService } from './modalidad-transporte.service';
import { ModalidadTransporteController } from './modalidad-transporte.controller';
import { ModalidadTransporte } from './entities/modalidad-transporte.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ModalidadTransporteController],
  providers: [ModalidadTransporteService],
  imports: [TypeOrmModule.forFeature([ModalidadTransporte])],
  exports: [ModalidadTransporteService],
})
export class ModalidadTransporteModule {}
