import { Module } from '@nestjs/common';
import { DespachoService } from './despacho.service';
import { DespachoController } from './despacho.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Despacho } from './entities/despacho.entity';

@Module({
  controllers: [DespachoController],
  providers: [DespachoService],
  imports: [TypeOrmModule.forFeature([Despacho])],
  exports: [DespachoService],
})
export class DespachoModule {}
