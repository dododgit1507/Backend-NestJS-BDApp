import { Module } from '@nestjs/common';
import { AuditoriaService } from './auditoria.service';
import { AuditoriaController } from './auditoria.controller';
import { Auditoria } from './entities/auditoria.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AuditoriaController],
  providers: [AuditoriaService],
  imports: [TypeOrmModule.forFeature([Auditoria])], // Add any necessary imports here, such as TypeOrmModule if you have entities
  exports: [AuditoriaService], // Export the service if it needs to be used in other modules
})
export class AuditoriaModule {}
