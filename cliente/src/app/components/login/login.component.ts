import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarioLogin = new Usuario();      // Para iniciar sesión
  usuarioRegistro = new Usuario();   // Para registrar un nuevo usuario

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    $(document).ready(function () {
      $('.modal').modal();
    });
  }

  logueo() {
    this.loginService.existe(
      this.usuarioLogin.correo_us,
      this.usuarioLogin.contrasena_us
    ).subscribe((resusuario: any) => {
      if (resusuario.id != -1) {
        console.log(resusuario);
        localStorage.setItem('id_usuario', resusuario.id_usuario);
        localStorage.setItem('nombre_us', resusuario.nombre_us);
        Swal.fire({
          title: 'Bienvenido',
          text: `Hola, ${resusuario.nombre_us}`,
          icon: 'success'
        });
        // Redireccionar si quieres
        // this.router.navigate(['/dashboard']);
      } else {
        Swal.fire({
          title: "Error",
          text: "Usuario o contraseña incorrecto",
          icon: "error"
        });
      }
    }, err => console.error(err));
  }

  Registrarse() {
    this.usuarioRegistro = new Usuario(); // Limpiar campos del registro
    console.log("Registro");
    $("#modalIngreso").modal();
    $("#modalIngreso").modal("open");
  }

  GuardarDatos() {
    this.loginService.insertar_usuario(
      this.usuarioRegistro.nombre_us,
      this.usuarioRegistro.correo_us,
      this.usuarioRegistro.contrasena_us
    ).subscribe((resusuario: any) => {
      Swal.fire({
        title: "Registro Exitoso",
        text: "Usuario Agregado",
        icon: "success"
      });
      $("#modalIngreso").modal("close");
      this.usuarioRegistro = new Usuario(); // Limpiar formulario después de guardar
    }, err => {
      Swal.fire({
        title: "Error",
        text: "No se pudo registrar el usuario",
        icon: "error"
      });
      console.error(err);
    });
  }
}
