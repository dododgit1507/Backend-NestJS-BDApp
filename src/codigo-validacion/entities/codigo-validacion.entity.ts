import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('codigos_validacion_pkey', ['idCodigo'], { unique: true })
@Entity('codigos_validacion', { schema: 'public' })
export class CodigosValidacion {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id_codigo' })
  idCodigo: number;

  @Column('character varying', { name: 'codigo', length: 8 })
  codigo: string;

  @Column('date', { name: 'fecha_creacion' })
  fechaCreacion: string;

  @Column('time without time zone', { name: 'hora_creacion' })
  horaCreacion: string;

  @Column('character varying', { name: 'estado', length: 10 })
  estado: string;

  @Column('character varying', { name: 'responsable', length: 50 })
  responsable: string;
}
