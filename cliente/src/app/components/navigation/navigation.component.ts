import { Component, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { ElementRef } from '@angular/core';
import { PrincipalService } from '../../services/principal.service';
import { ProductoService } from '../../services/producto.service';
import { Producto } from 'src/app/models/producto';
import { Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

declare var M: any; // Declara la variable M para acceder a Materialize

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements AfterViewInit, OnDestroy {
  productos: Producto[] = [];
  producto: Producto = new Producto();
  productoNuevo: Producto = new Producto();
  @ViewChild('modalSearch') modalSearchRef!: ElementRef;
  @Output() resultadosBusqueda = new EventEmitter<any[]>();
  @ViewChild('searchInputField') searchInputField!: ElementRef;

  private modalSearchInstance: any; // Mantén una referencia al modal para evitar problemas de instancia

  constructor(private principalService: PrincipalService, private productoService: ProductoService) { }

  ngAfterViewInit(): void {
    this.initModal();
  }

  ngOnDestroy(): void {
    // Limpia los resultados al destruir el componente
    this.limpiarResultados();
  }

  private initModal(): void {
    this.modalSearchInstance = M.Modal.init(this.modalSearchRef.nativeElement);
  }

  public limpiarCampoBusqueda(): void {
    this.searchInputField.nativeElement.value = '';
  }

  private limpiarResultados(): void {
    console.log('Limpiando resultados');
    this.resultadosBusqueda.emit([]); // Envía un array vacío para limpiar los resultados
  }

  public cerrarModal(): void {
    console.log('Cerrando modal y limpiando resultados');

    // Limpia el campo de búsqueda
    this.limpiarCampoBusqueda();

    // Obtiene la referencia al área de resultados
    const resultadosBusquedaArea = document.querySelector('.resultados-busqueda');

    // Verifica si el área de resultados existe antes de intentar limpiarla
    if (resultadosBusquedaArea) {
      // Elimina el contenido HTML dentro del área de resultados
      resultadosBusquedaArea.innerHTML = '';
    }

    // Cierra el modal
    this.modalSearchInstance.close();

    // Limpia los resultados (puede que no sea necesario si el área de resultados ya está vacía)
    this.limpiarResultados();
  }

  buscar(): void {
    const searchTerm = (<HTMLInputElement>document.getElementById('searchInput')).value;
    console.log('Realizando búsqueda: ' + searchTerm);
  
    // Llamada al servicio para realizar la búsqueda
    this.principalService.buscarProducto(searchTerm).subscribe(
      (respuesta) => {
        console.log('Respuesta del servidor:', respuesta);
  
        // Asegúrate de que resultadosBusquedaArea no sea null
        const resultadosBusquedaArea = document.querySelector('.resultados-busqueda');
        if (!resultadosBusquedaArea) {
          console.error('Error: El área de resultados no se encontró.');
          return;
        }
  
        // Limpia el área de resultados
        resultadosBusquedaArea.innerHTML = '';
  
        // Verifica si hay resultados
        if (Array.isArray(respuesta) && respuesta.length > 0) {
          // Itera sobre los resultados y muestra la información
          respuesta.forEach((producto: any) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.width = '210px';
            card.style.height = '320px';
  
            card.innerHTML = `
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="../../../assets/calemamono.jpg" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">${producto.nombre}</span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">${producto.nombre}<i class="material-icons right">close</i></span>
                <p>${producto.descripcion}</p>
                <p>${producto.precio}</p>
                <p>${producto.marca}</p>
                <p>${producto.categoria}</p>
                <a id="agregarCarritoBtn_${producto.id_producto}" class="waves-effect waves-light btn">
                  <i class="material-icons left">local_grocery_store</i>Agregar
                </a>
              </div>
            `;
  
            resultadosBusquedaArea.appendChild(card);
  
            // Agrega el evento de clic después de agregar el HTML dinámico
            const agregarCarritoBtn = card.querySelector(`#agregarCarritoBtn_${producto.id_producto}`);
            if (agregarCarritoBtn) {
              agregarCarritoBtn.addEventListener('click', () => this.Agregar_carrito(producto.id_producto, producto.cantidad));
            }
          });
  
          // Abre el modal
          this.modalSearchInstance.open();
          const closeModalBtn = document.querySelector('.modal-search .modal-close');
        if (closeModalBtn) {
          closeModalBtn.addEventListener('click', () => {
            this.cerrarModal();
          });
        }
        } else {
          // No se encontraron productos, muestra el mensaje de alerta
          Swal.fire({
            title: "Sin coincidencias",
            text: "No se encontraron productos",
            icon: "error"
          }).then(() => {
            // Cierra el modal después de mostrar el mensaje de alerta
            this.cerrarModal();
          });
        }
      },
      (error) => {
        // Maneja el error de una manera que permita mostrar el mensaje de alerta
        console.error('Error al buscar producto:', error);
  
        // Muestra el mensaje de alerta en caso de error
        Swal.fire({
          title: "Sin coincidencias",
          text: "No se encontraron productos",
          icon: "error"
        }).then(() => {
          // Cierra el modal después de mostrar el mensaje de alerta
          this.cerrarModal();
        });
      }
    );
  }
    
  private Agregar_carrito(id_producto: any, cantidad: any) {
    console.log("Carrito");
    console.log(cantidad); // Cambiado de this.producto.cantidad a cantidad
    this.principalService.insertar_carrito(localStorage.getItem("id_usuario"), id_producto, cantidad).subscribe((resusuario: any) => {
      Swal.fire({
        title: "Producto agregado",
        text: "Se agregó a tu carrito",
        icon: "success"
      });
    },
      err => console.error(err)
    );
  }
}
