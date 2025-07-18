import { AsignacionTransporte } from 'src/asignacion-transporte/entities/asignacion-transporte.entity';
import { EstadoTransporte } from 'src/estado-transporte/entities/estado-transporte.entity';
import { Mantenimiento } from 'src/mantenimiento/entities/mantenimiento.entity';
import { ModalidadTransporte } from 'src/modalidad-transporte/entities/modalidad-transporte.entity';
import { Propietario } from 'src/propietario/entities/propietario.entity';
import { TipoTransporte } from 'src/tipo-transporte/entities/tipo-transporte.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Index('transportes_pkey', ['idTransporte'], { unique: true })
@Entity('transportes', { schema: 'public' })
export class Transportes {
  @Column('character', { primary: true, name: 'id_transporte', length: 5 })
  idTransporte: string;

  @Column('character', { name: 'placa', length: 7 })
  placa: string;

  @Column('character varying', { name: 'marca', nullable: true, length: 50 })
  marca: string | null;

  @Column('character varying', { name: 'modelo', nullable: true, length: 50 })
  modelo: string | null;

  @Column('date', { name: 'fecha_registro' })
  fechaRegistro: string;

  @OneToMany(
    () => AsignacionTransporte,
    (asignacionTransporte) => asignacionTransporte.idTransporte,
  )
  asignacionTransportes: AsignacionTransporte[];

  @OneToMany(() => Mantenimiento, (mantenimiento) => mantenimiento.idTransporte)
  mantenimientos: Mantenimiento[];

  @ManyToOne(
    () => EstadoTransporte,
    (estadoTransporte) => estadoTransporte.transportes,
  )
  @JoinColumn([
    {
      name: 'id_estado_transporte',
      referencedColumnName: 'idEstadoTransporte',
    },
  ])
  idEstadoTransporte: EstadoTransporte;

  @ManyToOne(
    () => ModalidadTransporte,
    (modalidadTransporte) => modalidadTransporte.transportes,
  )
  @JoinColumn([
    {
      name: 'id_modalidad_transporte',
      referencedColumnName: 'idModalidadTransporte',
    },
  ])
  idModalidadTransporte: ModalidadTransporte;

  @ManyToOne(() => Propietario, (propietario) => propietario.transportes)
  @JoinColumn([
    { name: 'id_propietario', referencedColumnName: 'idPropietario' },
  ])
  idPropietario: Propietario;

  @ManyToOne(
    () => TipoTransporte,
    (tipoTransporte) => tipoTransporte.transportes,
  )
  @JoinColumn([
    { name: 'id_tipo_transporte', referencedColumnName: 'idTipoTransporte' },
  ])
  idTipoTransporte: TipoTransporte;
}
