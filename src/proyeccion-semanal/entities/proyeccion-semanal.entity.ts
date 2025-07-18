import { CalientitosPrelositas } from 'src/calientitos-prelositas/entities/calientitos-prelosita.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Index('proyeccion_semanal_pkey', ['idProyeccionSemanal'], { unique: true })
@Entity('proyeccion_semanal', { schema: 'public' })
export class ProyeccionSemanal {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id_proyeccion_semanal' })
  idProyeccionSemanal: number;

  @Column('character', { name: 'numero_semana', length: 5 })
  numeroSemana: string;

  @Column('date', { name: 'fecha' })
  fecha: string;

  @Column('double precision', { name: 'metros_cuadrados' })
  metrosCuadrados: number;

  @ManyToOne(
    () => CalientitosPrelositas,
    (calientitosPrelosas) => calientitosPrelosas.proyeccionSemanals,
  )
  @JoinColumn([
    {
      name: 'id_calientitos_prelosas',
      referencedColumnName: 'idCalientitosPrelosas',
    },
  ])
  idCalientitosPrelosas: CalientitosPrelositas;
}
