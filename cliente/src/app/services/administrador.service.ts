import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  constructor(private http: HttpClient) { }

  /*cargarProducto(producto: any) {
    const { nombre, descripcion, precio, marca, cantidad, categoria } = producto;

    return this.http.post(`${environment.API_URI}/insertarProducto`, {
      nombre,
      descripcion,
      precio,
      marca,
      cantidad,
      categoria,
    });
  }*/

  listOne(id_venta:any) {
    return this.http.get(`${environment.API_URI}/venta/insertarVenta/${id_venta}`);
  }
  list() {
    return this.http.get(`${environment.API_URI }/usuario/mostrarUsuario/:id`);
  }

  existeAdmin(correo_admin: any, contrasena_admin: any) {
    console.log("porque?");
    console.log(correo_admin);
    console.log(contrasena_admin);
    return this.http.post(`${environment.API_URI }/administrador/ValidarAdministrador`,{"correo_admin": correo_admin, "contrasena_admin": contrasena_admin });
  }

  eliminarUsuario(id: any) {
    return this.http.delete(`${environment.API_URI }/usuarios/eliminarUsuario/${ id }`);
  }
}