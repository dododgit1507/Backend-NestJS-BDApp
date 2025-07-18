import { Transportes } from 'src/transportes/entities/transporte.entity';
import { Column, Entity, Index, OneToMany } from 'typeorm';

@Index('tipo_transporte_pkey', ['idTipoTransporte'], { unique: true })
@Entity('tipo_transporte', { schema: 'public' })
export class TipoTransporte {
  @Column('character', { primary: true, name: 'id_tipo_transporte', length: 5 })
  idTipoTransporte: string;

  @Column('character varying', { name: 'nombre', length: 50 })
  nombre: string;

  @OneToMany(() => Transportes, (transportes) => transportes.idTipoTransporte)
  transportes: Transportes[];
}
