import { IngenieroProyecto } from 'src/ingeniero-proyecto/entities/ingeniero-proyecto.entity';
import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Index('codigos_cartera_codigo_key', ['codigo'], { unique: true })
@Index('codigos_cartera_pkey', ['idCodigo'], { unique: true })
@Entity('codigos_cartera', { schema: 'public' })
export class CodigosCartera {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id_codigo' })
  idCodigo: number;

  @Column('character varying', { name: 'codigo', unique: true, length: 1 })
  codigo: string;

  @ManyToMany(
    () => IngenieroProyecto,
    (ingenieroProyecto) => ingenieroProyecto.codigosCarteras,
  )
  @JoinTable({
    name: 'asignacion_codigo_ingeniero',
    joinColumns: [{ name: 'id_codigo', referencedColumnName: 'idCodigo' }],
    inverseJoinColumns: [
      { name: 'id_ingeniero', referencedColumnName: 'idIngeniero' },
    ],
    schema: 'public',
  })
  ingenieroProyectos: IngenieroProyecto[];
}
