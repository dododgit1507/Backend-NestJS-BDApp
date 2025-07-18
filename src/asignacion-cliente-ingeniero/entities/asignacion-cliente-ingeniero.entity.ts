import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { IngenieroProyecto } from 'src/ingeniero-proyecto/entities/ingeniero-proyecto.entity';
import { Cliente } from 'src/cliente/entities/cliente.entity';

@Index('asignacion_cliente_ingeniero_pkey', ['idCliente', 'idIngeniero'], {
  unique: true,
})
@Index('asignacion_cliente_ingeniero_id_cliente_key', ['idCliente'], {
  unique: true,
})
@Index('asignacion_cliente_ingeniero_id_ingeniero_key', ['idIngeniero'], {
  unique: true,
})
@Entity('asignacion_cliente_ingeniero', { schema: 'public' })
export class AsignacionClienteIngeniero {
  @Column('character', { primary: true, name: 'id_ingeniero', length: 5 })
  idIngeniero: string;

  @Column('character', { primary: true, name: 'id_cliente', length: 10 })
  idCliente: string;

  @Column('date', { name: 'fecha_asignacion', nullable: true })
  fechaAsignacion: string | null;

  @OneToOne(() => Cliente, (cliente) => cliente.asignacionClienteIngeniero)
  @JoinColumn([{ name: 'id_cliente', referencedColumnName: 'idCliente' }])
  idCliente2: Cliente;

  @OneToOne(
    () => IngenieroProyecto,
    (ingenieroProyecto) => ingenieroProyecto.asignacionClienteIngeniero,
  )
  @JoinColumn([{ name: 'id_ingeniero', referencedColumnName: 'idIngeniero' }])
  idIngeniero2: IngenieroProyecto;
}
