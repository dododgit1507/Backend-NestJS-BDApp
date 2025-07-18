import { Module } from '@nestjs/common';
import { CorreoService } from './correo.service';
import { CorreoController } from './correo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Correo } from './entities/correo.entity';

@Module({
  controllers: [CorreoController],
  providers: [CorreoService],
  imports: [TypeOrmModule.forFeature([Correo])], 
  exports: [CorreoService], // Export the service if it needs to be used in other modules
})
export class CorreoModule {}
