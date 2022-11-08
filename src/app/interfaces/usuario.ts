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
