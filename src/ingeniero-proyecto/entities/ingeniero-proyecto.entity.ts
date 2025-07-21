import { AsignacionClienteIngeniero } from 'src/asignacion-cliente-ingeniero/entities/asignacion-cliente-ingeniero.entity';
import { AsignacionCodigoIngeniero } from 'src/asignacion-codigo-ingeniero/entities/asignacion-codigo-ingeniero.entity';
import { Auditoria } from 'src/auditoria/entities/auditoria.entity';
import { CodigosCartera } from 'src/codigos-cartera/entities/codigos-cartera.entity';
import { Despacho } from 'src/despacho/entities/despacho.entity';
import { ProyeccionProducto } from 'src/proyeccion-producto/entities/proyeccion-producto.entity';
import {
  Column,
  Entity,
  Index,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Index('ingeniero_proyecto_pkey', ['idIngeniero'], { unique: true })
@Entity('ingeniero_proyecto', { schema: 'public' })
export class IngenieroProyecto {
  @Column('character', { primary: true, name: 'id_ingeniero', length: 5 })
  idIngeniero: string;

  @Column('character varying', { name: 'nombre', length: 25 })
  nombre: string;

  @Column('character varying', { name: 'estado', length: 10 })
  estado: string;

  @Column('character varying', { name: 'correo', length: 50 })
  correo: string;

  @OneToOne(
    () => AsignacionClienteIngeniero,
    (asignacionClienteIngeniero) => asignacionClienteIngeniero.idIngeniero2,
  )
  asignacionClienteIngeniero: AsignacionClienteIngeniero;

  @ManyToMany(
    () => CodigosCartera,
    (codigosCartera) => codigosCartera.ingenieroProyectos,
  )
  codigosCarteras: CodigosCartera[];

  @OneToMany(() => Auditoria, (auditoria) => auditoria.idIngeniero)
  auditorias: Auditoria[];

  @OneToMany(() => Despacho, (despacho) => despacho.idIngeniero)
  despachos: Despacho[];

  @OneToMany(
    () => ProyeccionProducto,
    (proyeccionProducto) => proyeccionProducto.idIngeniero,
  )
  proyeccionProductos: ProyeccionProducto[];

  @OneToMany(() => AsignacionCodigoIngeniero, (asignacion) => asignacion.ingeniero)
asignaciones: AsignacionCodigoIngeniero[];

}
