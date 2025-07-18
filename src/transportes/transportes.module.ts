import { Module } from '@nestjs/common';
import { TransportesService } from './transportes.service';
import { TransportesController } from './transportes.controller';
import { Transportes } from './entities/transporte.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [TransportesController],
  providers: [TransportesService],
  imports: [TypeOrmModule.forFeature([Transportes])], // Specify the entities related to this module
  exports: [TransportesService],
})
export class TransportesModule {}
