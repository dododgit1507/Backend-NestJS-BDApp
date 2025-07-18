import { Cliente } from 'src/cliente/entities/cliente.entity';
import { IngenieroProyecto } from 'src/ingeniero-proyecto/entities/ingeniero-proyecto.entity';
import { ProyeccionSemanalProducto } from 'src/proyeccion-semanal-producto/entities/proyeccion-semanal-producto.entity';
import { Proyecto } from 'src/proyecto/entities/proyecto.entity';
import { TipoProducto } from 'src/tipo-producto/entities/tipo-producto.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Index('proyeccion_producto_pkey', ['idProyeccionProducto'], { unique: true })
@Entity('proyeccion_producto', { schema: 'public' })
export class ProyeccionProducto {
  @Column('character varying', {
    primary: true,
    name: 'id_proyeccion_producto',
    length: 10,
  })
  idProyeccionProducto: string;

  @Column('date', { name: 'fecha_inicio' })
  fechaInicio: string;

  @Column('date', { name: 'fecha_fin' })
  fechaFin: string;

  @Column('integer', { name: 'pisos' })
  pisos: number;

  @Column('integer', { name: 'sotanos' })
  sotanos: number;

  @Column('integer', { name: 'pisos_semana' })
  pisosSemana: number;

  @Column('double precision', { name: 'metrado_piso' })
  metradoPiso: number;

  @Column('character varying', { name: 'estado', length: 25 })
  estado: string;

  @Column('double precision', { name: 'total' })
  total: number;

  @ManyToOne(() => Cliente, (cliente) => cliente.proyeccionProductos)
  @JoinColumn([{ name: 'id_cliente', referencedColumnName: 'idCliente' }])
  idCliente: Cliente;

  @ManyToOne(
    () => IngenieroProyecto,
    (ingenieroProyecto) => ingenieroProyecto.proyeccionProductos,
  )
  @JoinColumn([{ name: 'id_ingeniero', referencedColumnName: 'idIngeniero' }])
  idIngeniero: IngenieroProyecto;

  @ManyToOne(() => Proyecto, (proyecto) => proyecto.proyeccionProductos)
  @JoinColumn([{ name: 'id_proyecto', referencedColumnName: 'idProyecto' }])
  idProyecto: Proyecto;

  @ManyToOne(
    () => TipoProducto,
    (tipoProducto) => tipoProducto.proyeccionProductos,
  )
  @JoinColumn([
    { name: 'id_tipo_producto', referencedColumnName: 'idTipoProducto' },
  ])
  idTipoProducto: TipoProducto;

  @OneToMany(
    () => ProyeccionSemanalProducto,
    (proyeccionSemanalProducto) =>
      proyeccionSemanalProducto.idProyeccionProducto,
  )
  proyeccionSemanalProductos: ProyeccionSemanalProducto[];
}
