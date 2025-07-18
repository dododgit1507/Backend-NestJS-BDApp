import { Module } from '@nestjs/common';
import { MantenimientoService } from './mantenimiento.service';
import { MantenimientoController } from './mantenimiento.controller';
import { Mantenimiento } from './entities/mantenimiento.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [MantenimientoController],
  providers: [MantenimientoService],
  imports: [TypeOrmModule.forFeature([Mantenimiento])], // Import the TypeOrmModule with the Mantenimiento entity
  exports: [MantenimientoService], // Export the service if it needs to be used in
})
export class MantenimientoModule {}
