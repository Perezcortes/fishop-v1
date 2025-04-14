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