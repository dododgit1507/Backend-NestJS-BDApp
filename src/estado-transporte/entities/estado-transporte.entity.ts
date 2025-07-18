import { Transportes } from 'src/transportes/entities/transporte.entity';
import { Column, Entity, Index, OneToMany } from 'typeorm';

@Index('estado_transporte_pkey', ['idEstadoTransporte'], { unique: true })
@Entity('estado_transporte', { schema: 'public' })
export class EstadoTransporte {
  @Column('character', {
    primary: true,
    name: 'id_estado_transporte',
    length: 5,
  })
  idEstadoTransporte: string;

  @Column('character varying', { name: 'nombre', length: 50 })
  nombre: string;

  @OneToMany(() => Transportes, (transportes) => transportes.idEstadoTransporte)
  transportes: Transportes[];
}
