export interface ParqueaderoI {
    idUsuarioPar: number;
    direccion:    string;
    longitud:     number;
    latitud:      number;
    precio:       number;
    horaApertura: string;
    horaCierre:   string;
    puestos:      number;
}

export interface RespParI {
    created_at:   string;
    direccion:    string;
    estado:       number;
    horaApertura: string;
    horaCierre:   string;
    idParquedero: number;
    idUsuarioPar: number;
    latitud:      number;
    longitud:     number;
    precio:       number;
    puestos:      number;
}

export interface ParResI {
    message: string;
}
