export class Carrito{
    id_carrito: number;
    id_usuario: number;
    id_producto: number;
    cantidad: number;
    estado_carrito: string;
    precio_total: number;
    nombre: string;

    constructor() {
        this.id_carrito = 0;
        this.id_usuario = 0;
        this.id_producto = 0;
        this.estado_carrito = '';
        this.cantidad = 0;
        this.precio_total = 0;
        this.nombre = '';
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