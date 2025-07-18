import { Module } from '@nestjs/common';
import { IngenieroProyectoService } from './ingeniero-proyecto.service';
import { IngenieroProyectoController } from './ingeniero-proyecto.controller';
import { IngenieroProyecto } from './entities/ingeniero-proyecto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [IngenieroProyectoController],
  providers: [IngenieroProyectoService],
  imports: [TypeOrmModule.forFeature([IngenieroProyecto])], // Import the TypeOrmModule with the IngenieroProyecto entity
  exports: [IngenieroProyectoService],
})
export class IngenieroProyectoModule {}
