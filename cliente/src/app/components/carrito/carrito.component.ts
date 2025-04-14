import { Component, OnInit } from '@angular/core';
import { CarritoService } from './../../services/carrito.service';
import { ProductoService } from '../../services/producto.service';
import { Carrito } from 'src/app/models/carrito';
import Swal from 'sweetalert2';
declare var $: any;
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carritos: Carrito[] = [];
  carrito: Carrito = new Carrito();
  constructor(private carritoService: CarritoService, private productoService: ProductoService) {
    this.carritoService.mostrar_Todos_carrito().subscribe(
      (resCarritos: any) => {
        this.carritos = resCarritos;
        this.carritos.forEach(carrito => {
          this.obtenerNombreProducto(carrito);
        });
      },
      (error: any) => {
        console.error('Error al cargar el carrito:', error);

        // Muestra un mensaje más descriptivo al usuario
        if (error.status === 404) {
          Swal.fire('Error', 'No se encontraron elementos en el carrito.', 'error');
        } else {
          Swal.fire('Error', 'Ocurrió un error al cargar el carrito.', 'error');
        }
      }
    );
  }
  private obtenerNombreProducto(carrito: Carrito): void {
    this.productoService.mostrar_producto(carrito.id_producto).subscribe(
      (producto: any) => {
        carrito.nombre = producto.nombre; // Asegúrate de que 'nombre' sea la propiedad correcta en tu modelo Producto
      },
      (error: any) => {
        console.error('Error al obtener el nombre del producto:', error);
      }
    );
  }

  private handleAgregarAlCarritoSuccess(response: any): void {
    console.log('Producto agregado al carrito', response);
    // Puedes mostrar una notificación o realizar alguna acción adicional.
  }

  private handleAgregarAlCarritoError(error: any): void {
    console.error('Error al agregar producto al carrito', error);
    // Manejar el error si es necesario.
  }
  // carrito.component.ts
  ngOnInit(): void {
  }
}
