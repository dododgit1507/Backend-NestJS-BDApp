import { AsignacionTransporte } from 'src/asignacion-transporte/entities/asignacion-transporte.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';

@Index('rastreo_despacho_pkey', ['idRastreo'], { unique: true })
@Entity('rastreo_despacho', { schema: 'public' })
export class RastreoDespacho {
  @Column('character', { primary: true, name: 'id_rastreo', length: 5 })
  idRastreo: string;

  @Column('text', { name: 'latitud', nullable: true })
  latitud: string | null;

  @Column('text', { name: 'longitud', nullable: true })
  longitud: string | null;

  @Column('timestamp without time zone', { name: 'fecha_hora', nullable: true })
  fechaHora: Date | null;

  @ManyToOne(
    () => AsignacionTransporte,
    (asignacionTransporte) => asignacionTransporte.rastreoDespachos,
  )
  @JoinColumn([
    {
      name: 'id_asignacion_transporte',
      referencedColumnName: 'idAsignacionTransporte',
    },
  ])
  idAsignacionTransporte: AsignacionTransporte;
}
