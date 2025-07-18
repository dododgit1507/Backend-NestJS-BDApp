import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';

@Index('correo_correo_key', ['correo'], { unique: true })
@Index('correo_pkey', ['idCorreo'], { unique: true })
@Entity('correo', { schema: 'public' })
export class Correo {
  @Column('character', { primary: true, name: 'id_correo', length: 5 })
  idCorreo: string;

  @Column('character varying', { name: 'correo', unique: true, length: 50 })
  correo: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.correos)
  @JoinColumn([{ name: 'id_usuario', referencedColumnName: 'idUsuario' }])
  idUsuario: Usuario;
}
