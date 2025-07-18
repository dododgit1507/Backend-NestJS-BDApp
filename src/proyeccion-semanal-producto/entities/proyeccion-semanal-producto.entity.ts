import { ProyeccionProducto } from 'src/proyeccion-producto/entities/proyeccion-producto.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Index('proyeccion_semanal_producto_pkey', ['idProyeccionSemanalProducto'], {
  unique: true,
})
@Entity('proyeccion_semanal_producto', { schema: 'public' })
export class ProyeccionSemanalProducto {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id_proyeccion_semanal_producto',
  })
  idProyeccionSemanalProducto: number;

  @Column('character', { name: 'numero_semana', length: 5 })
  numeroSemana: string;

  @Column('date', { name: 'fecha' })
  fecha: string;

  @Column('double precision', {
    name: 'metros_cuadrados',
    nullable: true,
  })
  metrosCuadrados: number | null;

  @ManyToOne(
    () => ProyeccionProducto,
    (proyeccionProducto) => proyeccionProducto.proyeccionSemanalProductos,
  )
  @JoinColumn([
    {
      name: 'id_proyeccion_producto',
      referencedColumnName: 'idProyeccionProducto',
    },
  ])
  idProyeccionProducto: ProyeccionProducto;
}
