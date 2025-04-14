//modelito
export class Administrador{
    id_admin: number;
    nombre_admin : string;
    correo_admin : string;
    contrasena_admin : string;
    
    constructor() {
        this.id_admin = 0;
        this.nombre_admin = '';
        this.correo_admin = '';
        this.contrasena_admin = '';
    }
}
export class Producto{
    id_producto: number;
    nombre: string;
    descripcion: string;
    precio: number;
    marca: string;
    cantidad: number;
    categoria: string;

    constructor() {
        this.id_producto = 0;
        this.nombre = '';
        this.descripcion = '';
        this.precio = 0;
        this.marca = '';
        this.cantidad = 0;
        this.categoria = '';
    }
}