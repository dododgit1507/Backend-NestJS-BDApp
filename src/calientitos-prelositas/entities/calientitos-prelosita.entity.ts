import { ProyeccionSemanal } from 'src/proyeccion-semanal/entities/proyeccion-semanal.entity';
import { Column, Entity, Index, OneToMany } from 'typeorm';

@Index('calientitos_prelosas_pkey', ['idCalientitosPrelosas'], { unique: true })
@Entity('calientitos_prelosas', { schema: 'public' })
export class CalientitosPrelositas {
  @Column('character', {
    primary: true,
    name: 'id_calientitos_prelosas',
    length: 5,
  })
  idCalientitosPrelosas: string;

  @Column('character varying', { name: 'proyecto', length: 25 })
  proyecto: string;

  @Column('character varying', { name: 'cliente', length: 25 })
  cliente: string;

  @Column('date', { name: 'fecha_inicio' })
  fechaInicio: string;

  @Column('date', { name: 'fecha_fin' })
  fechaFin: string;

  @Column('double precision', { name: 'metrado_piso' })
  metradoPiso: number;

  @Column('character varying', { name: 'estado', length: 15 })
  estado: string;

  @Column('integer', { name: 'sotanos' })
  sotanos: number;

  @Column('integer', { name: 'pisos' })
  pisos: number;

  @Column('integer', { name: 'pisos_semana' })
  pisosSemana: number;

  @Column('double precision', { name: 'total' })
  total: number;

  @OneToMany(
    () => ProyeccionSemanal,
    (proyeccionSemanal) => proyeccionSemanal.idCalientitosPrelosas,
  )
  proyeccionSemanals: ProyeccionSemanal[];
}
