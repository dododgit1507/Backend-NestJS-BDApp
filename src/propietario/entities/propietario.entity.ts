import { Despacho } from 'src/despacho/entities/despacho.entity';
import { Transportes } from 'src/transportes/entities/transporte.entity';
import { Column, Entity, Index, OneToMany } from 'typeorm';

@Index('propietario_pkey', ['idPropietario'], { unique: true })
@Entity('propietario', { schema: 'public' })
export class Propietario {
  @Column('character', { primary: true, name: 'id_propietario', length: 5 })
  idPropietario: string;

  @Column('character varying', { name: 'nombre', length: 50 })
  nombre: string;

  @Column('character', { name: 'ruc', length: 11 })
  ruc: string;

  @Column('character varying', { name: 'razon_social', length: 100 })
  razonSocial: string;

  @Column('numeric', { name: 'precio', precision: 10, scale: 2 })
  precio: string;

  @Column('character varying', { name: 'telefono', nullable: true, length: 20 })
  telefono: string | null;

  @Column('text', { name: 'direccion', nullable: true })
  direccion: string | null;

  @OneToMany(() => Despacho, (despacho) => despacho.idPropietario)
  despachos: Despacho[];

  @OneToMany(() => Transportes, (transportes) => transportes.idPropietario)
  transportes: Transportes[];
}
