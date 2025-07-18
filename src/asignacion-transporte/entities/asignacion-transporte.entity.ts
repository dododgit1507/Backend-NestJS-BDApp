import { Despacho } from 'src/despacho/entities/despacho.entity';
import { EntregaDespacho } from 'src/entrega-despacho/entities/entrega-despacho.entity';
import { RastreoDespacho } from 'src/rastreo-despacho/entities/rastreo-despacho.entity';
import { Transportes } from 'src/transportes/entities/transporte.entity';
import { UsuarioConductor } from 'src/usuario-conductor/entities/usuario-conductor.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Index('asignacion_transporte_pkey', ['idAsignacionTransporte'], {
  unique: true,
})
@Entity('asignacion_transporte', { schema: 'public' })
export class AsignacionTransporte {
  @Column('character', {
    primary: true,
    name: 'id_asignacion_transporte',
    length: 10,
  })
  idAsignacionTransporte: string;

  @Column('date', { name: 'fecha_asignacion' })
  fechaAsignacion: string;

  @Column('text', { name: 'observaciones', nullable: true })
  observaciones: string | null;

  @ManyToOne(() => Despacho, (despacho) => despacho.asignacionTransportes)
  @JoinColumn([
    { name: 'codigo_despacho', referencedColumnName: 'codigoDespacho' },
  ])
  codigoDespacho: Despacho;

  @ManyToOne(
    () => Transportes,
    (transportes) => transportes.asignacionTransportes,
  )
  @JoinColumn([{ name: 'id_transporte', referencedColumnName: 'idTransporte' }])
  idTransporte: Transportes;

  @ManyToOne(
    () => UsuarioConductor,
    (usuarioConductor) => usuarioConductor.asignacionTransportes,
  )
  @JoinColumn([
    {
      name: 'id_usuario_conductor',
      referencedColumnName: 'idUsuarioConductor',
    },
  ])
  idUsuarioConductor: UsuarioConductor;

  @OneToMany(
    () => EntregaDespacho,
    (entregaDespacho) => entregaDespacho.idAsignacionTransporte,
  )
  entregaDespachos: EntregaDespacho[];

  @OneToMany(
    () => RastreoDespacho,
    (rastreoDespacho) => rastreoDespacho.idAsignacionTransporte,
  )
  rastreoDespachos: RastreoDespacho[];
}
