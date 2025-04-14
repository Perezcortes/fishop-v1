export class Usuario{
    id_usuario: number;
    nombre_us: string;
    correo_us: string;
    contrasena_us: string;

    constructor() {
        this.id_usuario = -1;
        this.nombre_us = '';
        this.correo_us = '';
        this.contrasena_us = '';
    }
}
//modelito
export class Administrador{
    id_admin: number;
    nombre_admin : string;
    correo_admin : string;
    contrasena_admin : string;
    
    constructor() {
        this.id_admin = -1;
        this.nombre_admin = '';
        this.correo_admin = '';
        this.contrasena_admin = '';
    }
}