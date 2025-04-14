export class Producto {
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
export class Venta {
    id_venta: number;
    id_usuario: number;
    id_carrito: number;
    cantidad: string;
    precio_unitario: string;
    fecha: string;

    constructor() {
        this.id_venta = 0;
        this.id_usuario = 0;
        this.id_carrito = 0;
        this.cantidad = '';
        this.precio_unitario = '';
        this.fecha = '';
    }
}
export class Usuario {
    id_usuario: number;
    nombre_us: '';
    correo_us: '';
    contrasena_us: string;

    constructor() {
        this.id_usuario = 0;
        this.nombre_us = '';
        this.correo_us = '';
        this.contrasena_us = '';
    }
}
export class Carrito {
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