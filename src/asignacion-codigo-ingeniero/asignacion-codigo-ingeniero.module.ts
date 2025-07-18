import { Module } from '@nestjs/common';
import { AsignacionCodigoIngenieroService } from './asignacion-codigo-ingeniero.service';
import { AsignacionCodigoIngenieroController } from './asignacion-codigo-ingeniero.controller';
import { AsignacionCodigoIngeniero } from './entities/asignacion-codigo-ingeniero.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AsignacionCodigoIngenieroController],
  providers: [AsignacionCodigoIngenieroService],
  imports: [TypeOrmModule.forFeature([AsignacionCodigoIngeniero])],
  exports: [AsignacionCodigoIngenieroService],
})
export class AsignacionCodigoIngenieroModule {}
