import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  existe(correo_us: any, contrasena_us: any) {
    console.log("porque?");
    console.log(correo_us);
    console.log(contrasena_us);
    return this.http.post(`${environment.API_URI }/usuario/ValidarUsuario`,{"correo_us": correo_us, "contrasena_us": contrasena_us });
  }

  eliminarUsuario(id: any) {
    return this.http.delete(`${environment.API_URI }/usuario/eliminarUsuario/${ id }`);
  }
  insertar_usuario(nombre_us: any, correo_us: any, contrasena_us: any) {
    console.log("Entrando al servicio de insertar usuario");
    return this.http.post(`${environment.API_URI}/usuario/insertarUsuario`, {"nombre_us":nombre_us, "correo_us": correo_us, "contrasena_us": contrasena_us });
  } 
  //validando al administrador
  existeAdmin(correo_admin: any, contrasena_admin: any) {
    console.log("Si admin?");
    console.log(correo_admin);
    console.log(contrasena_admin);
    return this.http.post(`${environment.API_URI }/administrador/ValidarAdministrador`,{"correo_admin": correo_admin, "contrasena_admin": contrasena_admin });
  }

  eliminarAdministrador(id: any) {
    return this.http.delete(`${environment.API_URI }/administrador/eliminarAdministrador/${ id }`);
  }
  insertar_administrador(nombre_admin: any, correo_admin: any, contrasena_admin: any) {
    console.log("Entrando al servicio de insertar administrador");
    return this.http.post(`${environment.API_URI}/administrador/insertarAdmininstrador`, {"nombre_admin":nombre_admin, "correo_admin": correo_admin, "contrasena_us": contrasena_admin });
  } 
}