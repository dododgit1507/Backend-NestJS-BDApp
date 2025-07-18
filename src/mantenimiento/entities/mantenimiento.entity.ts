import { Transportes } from 'src/transportes/entities/transporte.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';

@Index('mantenimiento_pkey', ['idMantenimiento'], { unique: true })
@Entity('mantenimiento', { schema: 'public' })
export class Mantenimiento {
  @Column('character', { primary: true, name: 'id_mantenimiento', length: 5 })
  idMantenimiento: string;

  @Column('date', { name: 'fecha_mantenimiento' })
  fechaMantenimiento: string;

  @Column('character varying', { name: 'tipo_mantenimiento', length: 50 })
  tipoMantenimiento: string;

  @Column('numeric', { name: 'costo', precision: 10, scale: 2 })
  costo: string;

  @Column('text', { name: 'descripcion', nullable: true })
  descripcion: string | null;

  @ManyToOne(() => Transportes, (transportes) => transportes.mantenimientos)
  @JoinColumn([{ name: 'id_transporte', referencedColumnName: 'idTransporte' }])
  idTransporte: Transportes;
}
