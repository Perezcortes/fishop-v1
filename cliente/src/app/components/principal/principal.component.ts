import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from 'src/app/models/producto';
import { CarritoService } from '../../services/carrito.service';
import { PrincipalService } from '../../services/principal.service';
import { Carrito } from 'src/app/models/carrito';
import { Venta } from 'src/app/models/venta';

import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  productos: Producto[] = [];
  producto: Producto = new Producto();
  productoNuevo: Producto = new Producto();

  ventas: [] = [];
  venta: Venta = new Venta();
  ventaNuevo: Venta = new Venta();

  carritos: Carrito[] = [];
  carrito: Carrito = new Carrito();

  constructor(private productoService: ProductoService, private carritoService: CarritoService, private principalService: PrincipalService) {
    this.productoService.mostrar_Todos_producto().subscribe((resProductos: any) => {
      this.productos = resProductos;
    }, err => console.error(err));
    this.carritoService.mostrar_Todos_carrito().subscribe((resCarrito: any) => {
      this.carrito = resCarrito;
    }, err => console.error(err));
  }
  
Agregar_carrito(id_producto: any, cantidad: any) {
  console.log("Carrito");
  console.log(this.producto.cantidad);
  this.principalService.insertar_carrito(localStorage.getItem("id_usuario"), id_producto, cantidad).subscribe((resusuario: any) => {
    Swal.fire({
      title: "Producto agregado",
      text: "Se agrego a tu carrito",
      icon: "success"
    });
  },
    err => console.error(err)
  );
}

ngOnInit(): void {
}

}
