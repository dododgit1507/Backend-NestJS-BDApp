import { Transportes } from 'src/transportes/entities/transporte.entity';
import { Column, Entity, Index, OneToMany } from 'typeorm';

@Index('modalidad_transporte_pkey', ['idModalidadTransporte'], { unique: true })
@Entity('modalidad_transporte', { schema: 'public' })
export class ModalidadTransporte {
  @Column('character', {
    primary: true,
    name: 'id_modalidad_transporte',
    length: 5,
  })
  idModalidadTransporte: string;

  @Column('character varying', { name: 'nombre', length: 50 })
  nombre: string;

  @OneToMany(
    () => Transportes,
    (transportes) => transportes.idModalidadTransporte,
  )
  transportes: Transportes[];
}
