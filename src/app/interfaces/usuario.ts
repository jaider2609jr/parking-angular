export interface UsuarioI {
    username:  string;
    password:  string;
    correo:    string;
    pNombre:   string;
    sNombre:   string;
    pApellido: string;
    sApellido: string;
    tipoId:    number;
    numeroId:  string;
}

export interface LoginI {
    username: string;
    password: string;
}

export interface RespI {
    message: string;
    status:  string;
    token?:   string;
    user_id?: number;
}

export interface UserRespI {
    correo:     string;
    created_at: string;
    estado:     number;
    idUsuario:  number;
    numeroId:   string;
    pApellido:  string;
    pNombre:    string;
    password:   string;
    rol_id:     number;
    sApellido:  string;
    sNombre?:    string;
    tipoId:     number;
    username:   string;
}

export interface UserPostI {
    correo:     string;
    numeroId:   string;
    pApellido:  string;
    pNombre:    string;
    password:   string;
    sApellido:  string;
    sNombre?:    string;
    username:   string;
}

