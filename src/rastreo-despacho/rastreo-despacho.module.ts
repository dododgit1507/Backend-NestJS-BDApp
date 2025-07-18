import { Module } from '@nestjs/common';
import { RastreoDespachoService } from './rastreo-despacho.service';
import { RastreoDespachoController } from './rastreo-despacho.controller';
import { RastreoDespacho } from './entities/rastreo-despacho.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [RastreoDespachoController],
  providers: [RastreoDespachoService],
  imports: [TypeOrmModule.forFeature([RastreoDespacho])],
  exports: [RastreoDespachoService],
})
export class RastreoDespachoModule {}
