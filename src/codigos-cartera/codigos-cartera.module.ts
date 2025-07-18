import { Module } from '@nestjs/common';
import { CodigosCarteraService } from './codigos-cartera.service';
import { CodigosCarteraController } from './codigos-cartera.controller';
import { CodigosCartera } from './entities/codigos-cartera.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CodigosCarteraController],
  providers: [CodigosCarteraService],
  imports: [TypeOrmModule.forFeature([CodigosCartera])], // Add any necessary imports here, such as TypeOrmModule if you have entities
  exports: [CodigosCarteraService], // Export the service if it needs to
})
export class CodigosCarteraModule {}
