import { Despacho } from 'src/despacho/entities/despacho.entity';
import { Column, Entity, Index, OneToMany } from 'typeorm';

@Index('oficina_tecnica_pkey', ['idOficina'], { unique: true })
@Entity('oficina_tecnica', { schema: 'public' })
export class OficinaTecnica {
  @Column('character', { primary: true, name: 'id_oficina', length: 5 })
  idOficina: string;

  @Column('character varying', { name: 'nombre', length: 25 })
  nombre: string;

  @Column('character varying', { name: 'especialidad', length: 25 })
  especialidad: string;

  @Column('character varying', { name: 'estado', length: 10 })
  estado: string;

  @OneToMany(() => Despacho, (despacho) => despacho.idOficina)
  despachos: Despacho[];
}
