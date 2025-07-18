import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('producto_pkey', ['idProducto'], { unique: true })
@Entity('producto', { schema: 'public' })
export class Producto {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id_producto' })
  idProducto: number;

  @Column('character varying', { name: 'nombre', length: 50 })
  nombre: string;

  @Column('character varying', { name: 'abreviatura', length: 15 })
  abreviatura: string;

  @Column('integer', { name: 'dias' })
  dias: number;

  @Column('character varying', { name: 'estado', length: 25 })
  estado: string;
}
