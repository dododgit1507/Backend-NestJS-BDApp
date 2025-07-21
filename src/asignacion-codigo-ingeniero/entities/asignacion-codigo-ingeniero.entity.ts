import { Entity, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { IngenieroProyecto } from 'src/ingeniero-proyecto/entities/ingeniero-proyecto.entity';
import { CodigosCartera } from 'src/codigos-cartera/entities/codigos-cartera.entity';

@Entity('asignacion_codigo_ingeniero', { schema: 'public' })
export class AsignacionCodigoIngeniero {
  @PrimaryColumn({ name: 'id_ingeniero', type: 'uuid' })
  id_ingeniero: string;

  @PrimaryColumn({ name: 'id_codigo', type: 'uuid' })
  id_codigo: string;

  @ManyToOne(() => IngenieroProyecto, (ingeniero) => ingeniero.asignaciones, {
    eager: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'id_ingeniero' })
  ingeniero: IngenieroProyecto;

  @ManyToOne(() => CodigosCartera, (codigo) => codigo.asignaciones, {
    eager: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'id_codigo' })
  codigo: CodigosCartera;
}
