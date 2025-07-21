import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AsignacionTransporteModule } from './asignacion-transporte/asignacion-transporte.module';
import { AsignacionClienteIngenieroModule } from './asignacion-cliente-ingeniero/asignacion-cliente-ingeniero.module';
import { AsignacionCodigoIngenieroModule } from './asignacion-codigo-ingeniero/asignacion-codigo-ingeniero.module';
import { AuditoriaModule } from './auditoria/auditoria.module';
import { CalientitosPrelositasModule } from './calientitos-prelositas/calientitos-prelositas.module';
import { ClienteModule } from './cliente/cliente.module';
import { CodigosCarteraModule } from './codigos-cartera/codigos-cartera.module';
import { CodigoValidacionModule } from './codigo-validacion/codigo-validacion.module';
import { CorreoModule } from './correo/correo.module';
import { DespachoModule } from './despacho/despacho.module';
import { EntregaDespachoModule } from './entrega-despacho/entrega-despacho.module';
import { EstadoTransporteModule } from './estado-transporte/estado-transporte.module';
import { IngenieroProyectoModule } from './ingeniero-proyecto/ingeniero-proyecto.module';
import { MantenimientoModule } from './mantenimiento/mantenimiento.module';
import { ModalidadTransporteModule } from './modalidad-transporte/modalidad-transporte.module';
import { OficinaTecnicaModule } from './oficina-tecnica/oficina-tecnica.module';
import { ProductoModule } from './producto/producto.module';
import { PropietarioModule } from './propietario/propietario.module';
import { ProyeccionProductoModule } from './proyeccion-producto/proyeccion-producto.module';
import { ProyeccionSemanalModule } from './proyeccion-semanal/proyeccion-semanal.module';
import { ProyeccionSemanalProductoModule } from './proyeccion-semanal-producto/proyeccion-semanal-producto.module';
import { ProyectoModule } from './proyecto/proyecto.module';
import { RastreoDespachoModule } from './rastreo-despacho/rastreo-despacho.module';
import { TipoProductoModule } from './tipo-producto/tipo-producto.module';
import { TipoTransporteModule } from './tipo-transporte/tipo-transporte.module';
import { TransportesModule } from './transportes/transportes.module';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioConductorModule } from './usuario-conductor/usuario-conductor.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
  ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      schema: process.env.DB_SCHEMA,
      synchronize: false, // only for development
    }), 
    AsignacionTransporteModule,
    AsignacionClienteIngenieroModule,
    AsignacionCodigoIngenieroModule,
    AuditoriaModule,
    CalientitosPrelositasModule,
    ClienteModule,
    CodigosCarteraModule,
    CodigoValidacionModule,
    CorreoModule,
    DespachoModule,
    EntregaDespachoModule,
    EstadoTransporteModule,
    IngenieroProyectoModule,
    MantenimientoModule,
    ModalidadTransporteModule,
    OficinaTecnicaModule,
    ProductoModule,
    PropietarioModule,
    ProyeccionProductoModule,
    ProyeccionSemanalModule,
    ProyeccionSemanalProductoModule,
    ProyectoModule,
    RastreoDespachoModule,
    TipoProductoModule,
    TipoTransporteModule,
    TransportesModule,
    UsuarioModule,
    UsuarioConductorModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
