import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Despacho } from 'src/despacho/entities/despacho.entity';
import { IngenieroProyecto } from 'src/ingeniero-proyecto/entities/ingeniero-proyecto.entity';
import { Proyecto } from 'src/proyecto/entities/proyecto.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Index('auditoria_pkey', ['idAuditoria'], { unique: true })
@Entity('auditoria', { schema: 'public' })
export class Auditoria {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id_auditoria' })
  idAuditoria: number;

  @Column('character varying', { name: 'tipo_accion', length: 15 })
  tipoAccion: string;

  @Column('text', { name: 'motivo' })
  motivo: string;

  @Column('date', { name: 'fecha' })
  fecha: string;

  @Column('time without time zone', { name: 'hora' })
  hora: string;

  @Column('character varying', { name: 'responsable', length: 15 })
  responsable: string;

  @ManyToOne(() => Despacho, (despacho) => despacho.auditorias)
  @JoinColumn([
    { name: 'codigo_despacho', referencedColumnName: 'codigoDespacho' },
  ])
  codigoDespacho: Despacho;

  @ManyToOne(() => Cliente, (cliente) => cliente.auditorias)
  @JoinColumn([{ name: 'id_cliente', referencedColumnName: 'idCliente' }])
  idCliente: Cliente;

  @ManyToOne(
    () => IngenieroProyecto,
    (ingenieroProyecto) => ingenieroProyecto.auditorias,
  )
  @JoinColumn([{ name: 'id_ingeniero', referencedColumnName: 'idIngeniero' }])
  idIngeniero: IngenieroProyecto;

  @ManyToOne(() => Proyecto, (proyecto) => proyecto.auditorias)
  @JoinColumn([{ name: 'id_proyecto', referencedColumnName: 'idProyecto' }])
  idProyecto: Proyecto;
}
