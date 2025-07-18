import { AsignacionClienteIngeniero } from 'src/asignacion-cliente-ingeniero/entities/asignacion-cliente-ingeniero.entity';
import { Auditoria } from 'src/auditoria/entities/auditoria.entity';
import { Despacho } from 'src/despacho/entities/despacho.entity';
import { ProyeccionProducto } from 'src/proyeccion-producto/entities/proyeccion-producto.entity';
import { Column, Entity, Index, OneToMany, OneToOne } from 'typeorm';


@Index('cliente_pkey', ['idCliente'], { unique: true })
@Entity('cliente', { schema: 'public' })
export class Cliente {
  @Column('character', { primary: true, name: 'id_cliente', length: 10 })
  idCliente: string;

  @Column('character varying', { name: 'ruc', length: 15 })
  ruc: string;

  @Column('character varying', { name: 'nombre_comercial', length: 50 })
  nombreComercial: string;

  @Column('character varying', { name: 'razon_social', length: 50 })
  razonSocial: string;

  @Column('character varying', { name: 'telefono', length: 10 })
  telefono: string;

  @Column('character varying', { name: 'pais', length: 25 })
  pais: string;

  @Column('character varying', { name: 'distrito', length: 75 })
  distrito: string;

  @Column('character varying', { name: 'direccion', length: 125 })
  direccion: string;

  @Column('character varying', { name: 'tipo', nullable: true, length: 10 })
  tipo: string | null;

  @Column('character varying', { name: 'credito', length: 50 })
  credito: string;

  @Column('character varying', { name: 'condicion', length: 100 })
  condicion: string;

  @Column('text', { name: 'datos' })
  datos: string;

  @OneToOne(
    () => AsignacionClienteIngeniero,
    (asignacionClienteIngeniero) => asignacionClienteIngeniero.idCliente2,
  )
  asignacionClienteIngeniero: AsignacionClienteIngeniero;

  @OneToMany(() => Auditoria, (auditoria) => auditoria.idCliente)
  auditorias: Auditoria[];

  @OneToMany(() => Despacho, (despacho) => despacho.idCliente)
  despachos: Despacho[];

  @OneToMany(
    () => ProyeccionProducto,
    (proyeccionProducto) => proyeccionProducto.idCliente,
  )
  proyeccionProductos: ProyeccionProducto[];
}
