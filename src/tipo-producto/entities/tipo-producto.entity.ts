import { ProyeccionProducto } from 'src/proyeccion-producto/entities/proyeccion-producto.entity';
import { Column, Entity, Index, OneToMany } from 'typeorm';

@Index('tipo_producto_pkey', ['idTipoProducto'], { unique: true })
@Entity('tipo_producto', { schema: 'public' })
export class TipoProducto {
  @Column('character', { primary: true, name: 'id_tipo_producto', length: 5 })
  idTipoProducto: string;

  @Column('character varying', { name: 'nombre', length: 25 })
  nombre: string;

  @OneToMany(
    () => ProyeccionProducto,
    (proyeccionProducto) => proyeccionProducto.idTipoProducto,
  )
  proyeccionProductos: ProyeccionProducto[];
}
