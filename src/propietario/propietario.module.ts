import { Module } from '@nestjs/common';
import { PropietarioService } from './propietario.service';
import { PropietarioController } from './propietario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Propietario } from './entities/propietario.entity';

@Module({
  controllers: [PropietarioController],
  providers: [PropietarioService],
  imports: [TypeOrmModule.forFeature([Propietario])],
  exports: [PropietarioService],
})
export class PropietarioModule {}
