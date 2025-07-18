import { Module } from '@nestjs/common';
import { AsignacionClienteIngenieroService } from './asignacion-cliente-ingeniero.service';
import { AsignacionClienteIngenieroController } from './asignacion-cliente-ingeniero.controller';
import { AsignacionClienteIngeniero } from './entities/asignacion-cliente-ingeniero.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
 controllers: [AsignacionClienteIngenieroController],
   providers: [AsignacionClienteIngenieroService],
   imports: [TypeOrmModule.forFeature([AsignacionClienteIngeniero])],
   exports: [AsignacionClienteIngenieroService],
})
export class AsignacionClienteIngenieroModule {}
