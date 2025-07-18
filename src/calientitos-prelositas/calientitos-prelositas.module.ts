import { Module } from '@nestjs/common';
import { CalientitosPrelositasService } from './calientitos-prelositas.service';
import { CalientitosPrelositasController } from './calientitos-prelositas.controller';
import { CalientitosPrelositas } from './entities/calientitos-prelosita.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CalientitosPrelositasController],
  providers: [CalientitosPrelositasService],
  imports: [TypeOrmModule.forFeature([CalientitosPrelositas])], // Add any necessary imports here, such as TypeOrmModule if you have entities
  exports: [CalientitosPrelositasService], // Export the service if it needs to be used in other modules
})
export class CalientitosPrelositasModule {}
