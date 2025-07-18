import { AsignacionTransporte } from 'src/asignacion-transporte/entities/asignacion-transporte.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';

@Index('entrega_despacho_pkey', ['idEntregaDespacho'], { unique: true })
@Entity('entrega_despacho', { schema: 'public' })
export class EntregaDespacho {
  @Column('character', {
    primary: true,
    name: 'id_entrega_despacho',
    length: 5,
  })
  idEntregaDespacho: string;

  @Column('date', { name: 'fecha_entrega' })
  fechaEntrega: string;

  @Column('time without time zone', { name: 'hora_entrega' })
  horaEntrega: string;

  @Column('text', { name: 'latitud_entrega', nullable: true })
  latitudEntrega: string | null;

  @Column('text', { name: 'longitud_entrega', nullable: true })
  longitudEntrega: string | null;

  @Column('text', { name: 'foto_evidencia_url', nullable: true })
  fotoEvidenciaUrl: string | null;

  @Column('text', { name: 'observaciones', nullable: true })
  observaciones: string | null;

  @Column('character varying', { name: 'nombre_receptor', length: 100 })
  nombreReceptor: string;

  @ManyToOne(
    () => AsignacionTransporte,
    (asignacionTransporte) => asignacionTransporte.entregaDespachos,
  )
  @JoinColumn([
    {
      name: 'id_asignacion_transporte',
      referencedColumnName: 'idAsignacionTransporte',
    },
  ])
  idAsignacionTransporte: AsignacionTransporte;
}
