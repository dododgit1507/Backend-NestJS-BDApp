import { Correo } from 'src/correo/entities/correo.entity';
import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Despacho } from '../../despacho/entities/despacho.entity';

@Index('usuario_pkey', ['idUsuario'], { unique: true })
@Entity('usuario', { schema: 'public' })
export class Usuario {
  @Column('character varying', {
    primary: true,
    name: 'id_usuario',
    length: 10,
  })
  idUsuario: string;

  @Column('character varying', { name: 'nombre', length: 25 })
  nombre: string;

  @Column('character varying', { name: 'correo', length: 50 })
  correo: string;

  @Column('character varying', { name: 'contrasena', length: 60 })
  contrasena: string;

  @Column('character varying', { name: 'rol', length: 25 })
  rol: string;

  @OneToMany(() => Correo, (correo) => correo.idUsuario)
  correos: Correo[];

  @OneToMany(() => Despacho, (despacho) => despacho.idUsuario)
  despachos: Despacho[];
}
