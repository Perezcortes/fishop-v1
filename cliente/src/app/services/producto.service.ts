import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  constructor(private http: HttpClient) { }
  mostrar_Todos_producto() {
    return this.http.get(`${environment.API_URI}/producto/mostrarTodosProducto`);
  }
  mostrar_producto(id_producto: any) {
    console.log(`Consultando producto con ID: ${id_producto}`);
    return this.http.get(`${environment.API_URI}/producto/mostrarProducto/${id_producto}`);
  }
  modificar_producto(id_producto: any, producto: any) {
    return this.http.put(`${environment.API_URI}/producto/modificarProducto/${id_producto}`, producto);
  }
  insertar_Producto(producto: any) {
    console.log("Entrando al servicio de insertar producto");
    return this.http.post(`${environment.API_URI}/producto/insertarProducto`, producto);
  }

  eliminar_producto(id_producto: any) {
    console.log("Eliminando un producto");
    return this.http.delete(`${environment.API_URI}/producto/eliminarProducto/${id_producto}`);
  }
  obtenerNombrePorId(id_producto: any) {
    return this.http.get(`${environment.API_URI}/producto/obtenerNombreProducto/${id_producto}`);
  }
  /*Empiezan servicios para ventas*/
  mostrar_Todas_venta() {
    return this.http.get(`${environment.API_URI}/venta/mostrarTodasVenta`);
  }
  eliminar_venta(id_venta: any) {
    console.log("Eliminando un producto");
    return this.http.delete(`${environment.API_URI}/venta/eliminarVenta/${id_venta}`);
  }
  /*Empiezan servicios para usuarios*/
  mostrar_Todos_usuario() {
    return this.http.get(`${environment.API_URI}/usuario/mostrarTodosUsuario`);
  }
  eliminar_usuario(id_usuario: any) {
    console.log("Eliminando un usuario");
    return this.http.delete(`${environment.API_URI}/usuario/eliminarUsuario/${id_usuario}`);
  }
  /*Empiezan servicios para carrito*/
  mostrar_Todos_carrito() {
    return this.http.get(`${environment.API_URI}/carrito/mostrarTodosCarrito`);
  }
  /*Servicios para mostrar los porductos por*/
  mostrar_porMarca_producto(nombre_marca: string) {
    return this.http.get(`${environment.API_URI}/producto/mostrarporMarcaProducto/${nombre_marca}`);
  }

  mostrar_porCantidad_producto(cantidad: string) {
    return this.http.get(`${environment.API_URI}/producto/mostrarPorCantidadProducto/${cantidad}`);
  }

  mostrar_porCategoria_producto(nombre_categoria: string) {
    return this.http.get(`${environment.API_URI}/producto/mostrarPorCategoriaProducto/${nombre_categoria}`);
  }
  /*Servicios para ventas*/
  mostrarPorFechaVenta(fecha: string) {
    return this.http.get(`${environment.API_URI}/venta/mostrarporFechaVenta/${fecha}`);
  }
  mostrar_Totalventa(id_venta: any) {
    return this.http.get(`${environment.API_URI}/venta/mostrarTotalVenta/${id_venta}`);
  }
} 