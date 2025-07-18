import { Auditoria } from 'src/auditoria/entities/auditoria.entity';
import { Despacho } from 'src/despacho/entities/despacho.entity';
import { ProyeccionProducto } from 'src/proyeccion-producto/entities/proyeccion-producto.entity';
import { Column, Entity, Index, OneToMany } from 'typeorm';

@Index('proyecto_pkey', ['idProyecto'], { unique: true })
@Entity('proyecto', { schema: 'public' })
export class Proyecto {
  @Column('character', { primary: true, name: 'id_proyecto', length: 15 })
  idProyecto: string;

  @Column('character varying', { name: 'proyecto_cup', length: 25 })
  proyectoCup: string;

  @Column('character varying', { name: 'nombre', length: 50 })
  nombre: string;

  @Column('character varying', { name: 'suf', length: 25 })
  suf: string;

  @Column('character varying', { name: 'codigo', length: 10 })
  codigo: string;

  @Column('character varying', { name: 'anio', length: 4 })
  anio: string;

  @Column('date', { name: 'fecha_tentativa', nullable: true })
  fechaTentativa: string | null;

  @Column('boolean', {
    name: 'subioordencompra',
    nullable: true,
    default: () => 'false',
  })
  subioordencompra: boolean | null;

  @Column('character', { name: 'id_tipo_proyecto', nullable: true, length: 5 })
  idTipoProyecto: string | null;

  @OneToMany(() => Auditoria, (auditoria) => auditoria.idProyecto)
  auditorias: Auditoria[];

  @OneToMany(() => Despacho, (despacho) => despacho.idProyecto)
  despachos: Despacho[];

  @OneToMany(
    () => ProyeccionProducto,
    (proyeccionProducto) => proyeccionProducto.idProyecto,
  )
  proyeccionProductos: ProyeccionProducto[];
}
