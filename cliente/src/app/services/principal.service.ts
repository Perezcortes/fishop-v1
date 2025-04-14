import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  constructor(private http: HttpClient) { }
  insertar_carrito(id_usuario: any, id_producto: any, cantidad: any) {
    console.log("Entrando al servicio de insertar carrito");
    return this.http.post(`${environment.API_URI}/carrito/insertarCarrito`, {"id_usuario":id_usuario, "id_producto":id_producto, "cantidad":cantidad});
  } 
  buscarProducto(nombreCategoria: any) {
    console.log("Entrando al servicio de buscar producto");
    const encodedSearchTerm = encodeURIComponent(nombreCategoria);
    return this.http.get(`${environment.API_URI}/producto/buscarProducto/${encodedSearchTerm}`);
  }  
}