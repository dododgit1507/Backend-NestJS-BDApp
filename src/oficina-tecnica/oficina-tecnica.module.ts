import { Module } from '@nestjs/common';
import { OficinaTecnicaService } from './oficina-tecnica.service';
import { OficinaTecnicaController } from './oficina-tecnica.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OficinaTecnica } from './entities/oficina-tecnica.entity';

@Module({
  controllers: [OficinaTecnicaController],
  providers: [OficinaTecnicaService],
  imports: [TypeOrmModule.forFeature([OficinaTecnica])],
  exports: [OficinaTecnicaService],
})
export class OficinaTecnicaModule {}
