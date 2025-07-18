import { Module } from '@nestjs/common';
import { EntregaDespachoService } from './entrega-despacho.service';
import { EntregaDespachoController } from './entrega-despacho.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntregaDespacho } from './entities/entrega-despacho.entity';

@Module({
  controllers: [EntregaDespachoController],
  providers: [EntregaDespachoService],
  imports: [TypeOrmModule.forFeature([EntregaDespacho])], // Add any necessary imports here, such as TypeOrmModule if you have entities
  exports: [EntregaDespachoService], // Export the service if it needs to be used in other modules
})
export class EntregaDespachoModule {}
