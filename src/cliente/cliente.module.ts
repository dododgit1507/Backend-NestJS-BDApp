import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';

@Module({
  controllers: [ClienteController],
  providers: [ClienteService],
  imports: [TypeOrmModule.forFeature([Cliente])], // Add any necessary imports here, such as TypeOrmModule if you have entities
  exports: [ClienteService], // Export the service if it needs to be used in other modules
})
export class ClienteModule {}
