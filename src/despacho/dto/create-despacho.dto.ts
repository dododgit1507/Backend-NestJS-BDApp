import { IsString, IsNotEmpty, MaxLength, Length, IsDateString, IsOptional, IsNumber } from '@nestjs/class-validator';

export class CreateDespachoDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(25)
    codigoDespacho: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(5)
    numeroSemana: string;

    @IsDateString()
    @IsNotEmpty()
    fecha: string;

    @IsString()
    @IsNotEmpty()
    @Length(5) // Formato HH:mm
    hora: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(25)
    piso: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(25)
    nivel: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    producto: string;

    @IsOptional()
    @IsNumber()
    metrosCuadrados?: number;

    @IsOptional()
    @IsNumber()
    metrosLineales?: number;

    @IsOptional()
    @IsNumber()
    kilogramos?: number;

    @IsOptional()
    @IsNumber()
    frisos?: number;

    @IsOptional()
    @IsNumber()
    chatas?: number;

    @IsOptional()
    @IsString()
    @MaxLength(25)
    especiales?: string;

    @IsOptional()
    @IsNumber()
    unidades?: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(10)
    especialidad: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(25)
    codigoPlano: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(25)
    planta: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(25)
    estado: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(10)
    prioridad: string;

    @IsOptional()
    @IsDateString()
    fechaEnvio?: string;

    @IsOptional()
    @IsString()
    @MaxLength(50)
    observacionEnvio?: string;

    @IsOptional()
    @IsString()
    @MaxLength(25)
    valorizado?: string;

    @IsOptional()
    @IsString()
    @MaxLength(25)
    facturado?: string;

    @IsOptional()
    @IsString()
    @MaxLength(50)
    pagado?: string;

    @IsOptional()
    @IsString()
    @MaxLength(100)
    observacionesGenerales?: string;

    // Relaciones (claves foráneas)
    @IsString()
    @IsNotEmpty()
    idCliente: string;

    @IsString()
    @IsNotEmpty()
    idIngeniero: string;

    @IsString()
    @IsNotEmpty()
    idOficina: string;

    @IsString()
    @IsNotEmpty()
    idPropietario: string;

    @IsString()
    @IsNotEmpty()
    idProyecto: string;

    @IsString()
    @IsNotEmpty()
    idUsuario: string;
}
