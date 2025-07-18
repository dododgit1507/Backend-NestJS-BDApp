import { AsignacionTransporte } from 'src/asignacion-transporte/entities/asignacion-transporte.entity';
import { Column, Entity, Index, OneToMany } from 'typeorm';

@Index('usuario_conductor_dni_key', ['dni'], { unique: true })
@Index('usuario_conductor_pkey', ['idUsuarioConductor'], { unique: true })
@Index('usuario_conductor_telefono_key', ['telefono'], { unique: true })
@Entity('usuario_conductor', { schema: 'public' })
export class UsuarioConductor {
  @Column('character', {
    primary: true,
    name: 'id_usuario_conductor',
    length: 10,
  })
  idUsuarioConductor: string;

  @Column('character varying', { name: 'contrasena', length: 60 })
  contrasena: string;

  @Column('character varying', { name: 'nombre', length: 100 })
  nombre: string;

  @Column('character', { name: 'telefono', unique: true, length: 9 })
  telefono: string;

  @Column('character', { name: 'dni', unique: true, length: 8 })
  dni: string;

  @Column('character varying', {
    name: 'licencia_conducir',
    nullable: true,
    length: 20,
  })
  licenciaConducir: string | null;

  @Column('boolean', { name: 'activo' })
  activo: boolean;

  @Column('date', { name: 'fecha_registro' })
  fechaRegistro: string;

  @Column('character varying', { name: 'correo', length: 100 })
  correo: string;

  @OneToMany(
    () => AsignacionTransporte,
    (asignacionTransporte) => asignacionTransporte.idUsuarioConductor,
  )
  asignacionTransportes: AsignacionTransporte[];
}
