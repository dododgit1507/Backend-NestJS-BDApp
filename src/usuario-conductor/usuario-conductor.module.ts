import { Module } from '@nestjs/common';
import { UsuarioConductorService } from './usuario-conductor.service';
import { UsuarioConductorController } from './usuario-conductor.controller';
import { UsuarioConductor } from './entities/usuario-conductor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [UsuarioConductorController],
  providers: [UsuarioConductorService],
  imports: [TypeOrmModule.forFeature([UsuarioConductor])], // Specify the entities related to this module
  exports: [UsuarioConductorService],
})
export class UsuarioConductorModule {}
