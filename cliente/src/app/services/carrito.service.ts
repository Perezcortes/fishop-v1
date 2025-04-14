import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  constructor(private http: HttpClient) { }
  // carrito.service.ts
  mostrar_Todos_carrito() {
    return this.http.get(`${environment.API_URI}/carrito/mostrarTodosCarrito`);
  }
  obtenerNombrePorId(id_producto: any) {
    console.log(`Consultando producto con ID: ${id_producto}`);
    return this.http.get(`${environment.API_URI}/producto/obtenerNombreProducto/${id_producto}`);
  }
  insertar_carrito(id_usuario: any, id_producto: any, cantidad: any) {
    console.log("Entrando al servicio de insertar producto");
    return this.http.post(`${environment.API_URI}/producto/insertarProducto`, {"id_producto":id_producto, "cantidad":cantidad});
  } 
  insertar_venta(id_producto: any) {
    console.log("Entrando al servicio de insertar venta");
    return this.http.post(`${environment.API_URI}/venta/insertarVenta`, id_producto);
  } 
  eliminar_carrito (id_producto : any){ 
    return this.http.delete(`${environment.API_URI}/carrito/eliminarCarrito/${id_producto}`);
  }
  actualizarEstadoCarrito(idCarrito: number, nuevoEstado: string) {
    const body = { estado_carrito: nuevoEstado };
    return this.http.put(`${environment.API_URI}/carrito/modificarCarrito/${idCarrito}`, body);
  }
}