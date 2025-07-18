import { Module } from '@nestjs/common';
import { CodigoValidacionService } from './codigo-validacion.service';
import { CodigoValidacionController } from './codigo-validacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CodigosValidacion } from './entities/codigo-validacion.entity';

@Module({
  controllers: [CodigoValidacionController],
  providers: [CodigoValidacionService],
  imports: [TypeOrmModule.forFeature([CodigosValidacion])], // Add any necessary imports here, such as TypeOrmModule if you have entities
  exports: [CodigoValidacionService], // Export the service if it needs to be used
})
export class CodigoValidacionModule {}
