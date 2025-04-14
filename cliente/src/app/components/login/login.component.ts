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
  usuario = new Usuario();
  constructor(private loginService: LoginService, private router: Router) {

  }

  ngOnInit(): void {
    $(document).ready(function()
    {
      $('.modal').modal();

    });
  }

  logueo()
  {
    this.loginService.existe(this.usuario.correo_us,this.usuario.contrasena_us).subscribe((resusuario: any) =>
    {
      if(resusuario.id!= -1)
      {
          //console.log (id_usuario);
          console.log (resusuario);
          console.log ("Se acepto al usuario");
          localStorage.setItem('id_usuario',resusuario.id_usuario);
          localStorage.setItem('nombre_us',resusuario.nombre_us);        
      }
      else
      {
        Swal.fire({
          title: "Error",
          text: "Usuario o contraseña incorrecto",
          icon: "error"
        });
        
      }
    },
    err => console.error(err)
    );
  }

  Registrarse()
  {
      this.usuario = new Usuario();
      console.log ("Registro");
      $("#modalIngreso").modal();
      $("#modalIngreso").modal("open");
    
  }

  GuardarDatos()
  {
    this.loginService.insertar_usuario(this.usuario.nombre_us,this.usuario.correo_us,this.usuario.contrasena_us).subscribe((resusuario:any)=>
    {
      Swal.fire({
        title: "Registro Exitoso",
        text: "Usuario Agregado",
        icon: "success"
      });
      $("#modalIngreso").modal("close");
      console.log ("Adios");
      this.usuario = new Usuario();
    });
  }
}