import { AsignacionTransporte } from 'src/asignacion-transporte/entities/asignacion-transporte.entity';
import { Auditoria } from 'src/auditoria/entities/auditoria.entity';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { IngenieroProyecto } from 'src/ingeniero-proyecto/entities/ingeniero-proyecto.entity';
import { OficinaTecnica } from 'src/oficina-tecnica/entities/oficina-tecnica.entity';
import { Propietario } from 'src/propietario/entities/propietario.entity';
import { Proyecto } from 'src/proyecto/entities/proyecto.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Index('despacho_pkey', ['codigoDespacho'], { unique: true })
@Entity('despacho', { schema: 'public' })
export class Despacho {
  @Column('character varying', {
    primary: true,
    name: 'codigo_despacho',
    length: 25,
  })
  codigoDespacho: string;

  @Column('character varying', { name: 'numero_semana', length: 5 })
  numeroSemana: string;

  @Column('date', { name: 'fecha' })
  fecha: string;

  @Column('time without time zone', { name: 'hora' })
  hora: string;

  @Column('character varying', { name: 'piso', length: 25 })
  piso: string;

  @Column('character varying', { name: 'nivel', length: 25 })
  nivel: string;

  @Column('character varying', { name: 'producto', length: 100 })
  producto: string;

  @Column('double precision', {
    name: 'metros_cuadrados',
    nullable: true,
  })
  metrosCuadrados: number | null;

  @Column('double precision', {
    name: 'metros_lineales',
    nullable: true,
  })
  metrosLineales: number | null;

  @Column('double precision', {
    name: 'kilogramos',
    nullable: true,
  })
  kilogramos: number | null;

  @Column('double precision', { name: 'frisos', nullable: true })
  frisos: number | null;

  @Column('double precision', { name: 'chatas', nullable: true })
  chatas: number | null;

  @Column('character varying', {
    name: 'especiales',
    nullable: true,
    length: 25,
  })
  especiales: string | null;

  @Column('integer', { name: 'unidades', nullable: true })
  unidades: number | null;

  @Column('character varying', { name: 'especialidad', length: 10 })
  especialidad: string;

  @Column('character varying', { name: 'codigo_plano', length: 25 })
  codigoPlano: string;

  @Column('character varying', { name: 'planta', length: 25 })
  planta: string;

  @Column('character varying', { name: 'estado', length: 25 })
  estado: string;

  @Column('character varying', { name: 'prioridad', length: 10 })
  prioridad: string;

  @Column('date', { name: 'fecha_envio', nullable: true })
  fechaEnvio: string | null;

  @Column('character varying', {
    name: 'observacion_envio',
    nullable: true,
    length: 50,
  })
  observacionEnvio: string | null;

  @Column('character varying', {
    name: 'valorizado',
    nullable: true,
    length: 25,
  })
  valorizado: string | null;

  @Column('character varying', {
    name: 'facturado',
    nullable: true,
    length: 25,
  })
  facturado: string | null;

  @Column('character varying', { name: 'pagado', nullable: true, length: 50 })
  pagado: string | null;

  @Column('character varying', {
    name: 'observaciones_generales',
    nullable: true,
    length: 100,
  })
  observacionesGenerales: string | null;

  @OneToMany(
    () => AsignacionTransporte,
    (asignacionTransporte) => asignacionTransporte.codigoDespacho,
  )
  asignacionTransportes: AsignacionTransporte[];

  @OneToMany(() => Auditoria, (auditoria) => auditoria.codigoDespacho)
  auditorias: Auditoria[];

  @ManyToOne(() => Cliente, (cliente) => cliente.despachos)
  @JoinColumn([{ name: 'id_cliente', referencedColumnName: 'idCliente' }])
  idCliente: Cliente;

  @ManyToOne(
    () => IngenieroProyecto,
    (ingenieroProyecto) => ingenieroProyecto.despachos,
  )
  @JoinColumn([{ name: 'id_ingeniero', referencedColumnName: 'idIngeniero' }])
  idIngeniero: IngenieroProyecto;

  @ManyToOne(() => OficinaTecnica, (oficinaTecnica) => oficinaTecnica.despachos)
  @JoinColumn([{ name: 'id_oficina', referencedColumnName: 'idOficina' }])
  idOficina: OficinaTecnica;

  @ManyToOne(() => Propietario, (propietario) => propietario.despachos)
  @JoinColumn([
    { name: 'id_propietario', referencedColumnName: 'idPropietario' },
  ])
  idPropietario: Propietario;

  @ManyToOne(() => Proyecto, (proyecto) => proyecto.despachos)
  @JoinColumn([{ name: 'id_proyecto', referencedColumnName: 'idProyecto' }])
  idProyecto: Proyecto;

  @ManyToOne(() => Usuario, (usuario) => usuario.despachos)
  @JoinColumn([{ name: 'id_usuario', referencedColumnName: 'idUsuario' }])
  idUsuario: Usuario;
}
