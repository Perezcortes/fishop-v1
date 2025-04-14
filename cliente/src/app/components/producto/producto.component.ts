import { Component, OnInit } from '@angular/core';
import { Producto, Venta, Usuario, Carrito } from 'src/app/models/producto';
import { ProductoService } from './../../services/producto.service';
import { CarritoService } from './../../services/carrito.service';

import Swal from 'sweetalert2';
declare var $: any;
declare var M: any;
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  filtroSeleccionado: string = '';
  filtroTexto: string = '';
  productos: Producto[] = [];
  producto: Producto = new Producto();
  productoNuevo: Producto = new Producto();
  productosFiltrados: any[] = [];

  ventas: Venta[] = [];
  venta: Venta = new Venta();
  resultadosVentasPorFecha: Venta[] = [];
  respuestaServidor: any;
  totalVentas: number = 0;
  numeroParaCalcular: number = 0;
  resultadoTotal: any;
  id_venta: number = 0;


  usuarios: Usuario[] = [];
  usuario: Usuario = new Usuario();
  usuarioNuevo: Usuario = new Usuario();

  carritos: Carrito[] = [];
  carrito: Carrito = new Carrito();
  carritoNuevo: Carrito = new Carrito();

  constructor(private productoService: ProductoService, private carritoService: CarritoService) {
    //servicio de productos
    this.productoService.mostrar_Todos_producto().subscribe((resProductos: any) => {
      this.productos = resProductos;
    }, err => console.error(err));
    //servicio de ventas
    this.productoService.mostrar_Todas_venta().subscribe((resVentas: any) => {
      this.ventas = resVentas;
    }, err => console.error(err));
    //servicio de usuario
    this.productoService.mostrar_Todos_usuario().subscribe((resUsuarios: any) => {
      this.usuarios = resUsuarios;
    }, err => console.error(err));
    //servicio de carrito
    this.productoService.mostrar_Todos_carrito().subscribe((resCarritos: any) => {
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
  modificar_producto(id_producto: any) {
    this.productoService.mostrar_producto(id_producto).subscribe(
      (resProducto: any) => {
        console.log('Respuesta del servicio:', resProducto);
        if (resProducto && Object.keys(resProducto).length > 0) {
          this.producto = resProducto;
          console.log('Producto encontrado:', this.producto);
          $('#modalModificarProducto').modal();
          $("#modalModificarProducto").modal("open");
        } else {
          console.error('El producto no fue encontrado.');
        }
      },
      err => console.error('Error en la solicitud:', err)
    );
  }

  guardarModificarProducto() {
    this.productoService.modificar_producto(this.producto.id_producto, this.producto).subscribe((res) => {
      $('#modalModificarProducto').modal('close');
      this.productoService.mostrar_Todos_producto().subscribe((resProductos: any) => {
        this.productos = resProductos;
      }, err => console.error(err));
      Swal.fire({
        position: 'center',
        icon: 'success',
        text: 'Producto Actualizado'
      })
    }, err => console.error(err));
  }


  insertar_Producto() {
    console.log("Clic en el icono de Add");
    this.productoNuevo = new Producto(); // Inicializar productoNuevo
    this.producto = this.productoNuevo; // Asignar productoNuevo al objeto utilizado en el formulario
    console.log("producto nuevo", this.productoNuevo);
    $('#modalInsertarProducto').modal();
    $("#modalInsertarProducto").modal("open");
  }

  guardarNuevoProducto() {
    console.log("Guardando Producto");
    this.productoService.insertar_Producto(this.productoNuevo).subscribe(
      (res) => {
        this.productoNuevo = new Producto();  // Limpiamos el productoNuevo después de la inserción
        $('#modalInsertarProducto').modal('close');
        this.productoService.mostrar_Todos_producto().subscribe(
          (resProductos: any) => {
            this.productos = resProductos;
          },
          err => console.error(err)
        );

        Swal.fire({
          position: 'center',
          icon: 'success',
          text: 'Producto Insertado'
        });
      },
      err => console.error(err)
    );
  }

  eliminar_producto(id_producto: any) {
    console.log("Click en eliminar producto");
    console.log("Identificador del producto: ", id_producto);
    Swal.fire({
      title: "¿Estás seguro de eliminar este producto?",
      text: "¡No es posible revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, quiero eliminarlo!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.productoService.eliminar_producto(id_producto).subscribe(
          () => {
            // Cambiamos el nombre de la variable resProducto a resEliminacion
            this.productoService.mostrar_Todos_producto().subscribe((resEliminacion: any) => {
              this.productos = resEliminacion;
              console.log("Productos después de eliminación:", this.productos);
            },
              err => console.error(err));
          },
          err => console.error(err)
        );

        Swal.fire({
          title: "¡Eliminado!",
          text: "Tu producto ha sido eliminado.",
          icon: "success"
        });
      }
    });
  }
  //eliminando una venta
  eliminar_venta(id_venta: any) {
    console.log("Click en eliminar venta");
    console.log("Identificador del producto: ", id_venta);
    Swal.fire({
      title: "¿Estás seguro de eliminar esta venta?",
      text: "¡No es posible revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, quiero eliminarlo!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.productoService.eliminar_venta(id_venta).subscribe(
          () => {
            // Cambiamos el nombre de la variable resProducto a resEliminacion
            this.productoService.mostrar_Todas_venta().subscribe((resEliminacion: any) => {
              this.ventas = resEliminacion;
              console.log("Productos después de eliminación:", this.ventas);
            },
              err => console.error(err));
          },
          err => console.error(err)
        );

        Swal.fire({
          title: "¡Eliminado!",
          text: "Tu producto ha sido eliminado.",
          icon: "success"
        });
      }
    });
  }
  //eliminando un usuario
  eliminar_usuario(id_usuario: any) {
    console.log("Click en eliminar usuario");
    console.log("Identificador del usuario: ", id_usuario);
    Swal.fire({
      title: "¿Estás seguro de eliminar este usuario?",
      text: "¡No es posible revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, quiero eliminarlo!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.productoService.eliminar_usuario(id_usuario).subscribe(
          () => {
            // Cambiamos el nombre de la variable resProducto a resEliminacion
            this.productoService.mostrar_Todos_usuario().subscribe((resEliminacion: any) => {
              this.usuarios = resEliminacion;
              console.log("Productos después de eliminación:", this.productos);
            },
              err => console.error(err));
          },
          err => console.error(err)
        );

        Swal.fire({
          title: "¡Eliminado!",
          text: "Tu producto ha sido eliminado.",
          icon: "success"
        });
      }
    });
  }

  eliminarcarrito(id_carrito: any) {
    console.log("Click en eliminar carrito");
    console.log("Identificador del producto: ", id_carrito);
    Swal.fire({
      title: "¿Estás seguro de eliminar este carrito?",
      text: "¡No es posible revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, quiero eliminarlo!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.carritoService.eliminar_carrito(id_carrito).subscribe(
          () => {
            // Cambiamos el nombre de la variable resProducto a resEliminacion
            this.productoService.mostrar_Todos_carrito().subscribe(
              (resCarritos: any) => {
                this.carritos = resCarritos;
                this.carritos.forEach(carrito => {
                  this.obtenerNombreProducto(carrito);
                });
              });
            console.log("Productos después de eliminación:", this.carritos);
          },
          err => console.error(err));
        Swal.fire({
          title: "¡Eliminado!",
          text: "Tu carrito ha sido eliminado.",
          icon: "success"
        });
      }
    });
  }

  actualizarEstadoCarrito(carrito: any, nuevoEstado: string) {
    // Llama a tu servicio para actualizar el estado del carrito
    this.carritoService.actualizarEstadoCarrito(carrito.id_carrito, nuevoEstado)
      .subscribe(
        respuesta => {
          console.log('Estado del carrito actualizado:', respuesta);
        },
        error => {
          console.error('Error al actualizar el estado del carrito:', error);
        }
      );
  }

  //filtros de visualizacion
  verPor() {
    const nuevoModal = $('#modalVerPor');
    if (nuevoModal.length > 0 && nuevoModal.modal) {
      nuevoModal.modal('open');
    } else {
      console.error('Error: Modal "modalVerPor" no definido o no encontrado.');
    }
  }

  aplicarFiltro() {
    if (this.filtroSeleccionado === 'marca') {
      // Lógica para filtrar por marca
      this.productoService.mostrar_porMarca_producto(this.filtroTexto).subscribe(
        (productos: any) => {
          this.productosFiltrados = productos;
        },
        (error: any) => {
          console.error('Error al filtrar por marca:', error);
          if (error.status === 404) {
            // Muestra un mensaje más descriptivo al usuario
            Swal.fire('Error', 'No se encontraron productos con la marca especificada.', 'error');
          } else {
            Swal.fire('Error', 'Ocurrió un error al filtrar por marca.', 'error');
          }
        }
      );
    } else if (this.filtroSeleccionado === 'cantidad') {
      // Lógica para filtrar por cantidad
      this.productoService.mostrar_porCantidad_producto(this.filtroTexto).subscribe(
        (productos: any) => {
          this.productosFiltrados = productos;
        },
        (error: any) => {
          console.error('Error al filtrar por cantidad:', error);
          if (error.status === 404) {
            // Muestra un mensaje más descriptivo al usuario
            Swal.fire('Error', 'No se encontraron productos con la cantidad especificada.', 'error');
          } else {
            Swal.fire('Error', 'Ocurrió un error al filtrar por cantidad.', 'error');
          }
        }
      );
    } else if (this.filtroSeleccionado === 'categoria') {
      // Lógica para filtrar por categoría
      this.productoService.mostrar_porCategoria_producto(this.filtroTexto).subscribe(
        (productos: any) => {
          this.productosFiltrados = productos;
        },
        (error: any) => {
          console.error('Error al filtrar por categoria:', error);
          if (error.status === 404) {
            // Muestra un mensaje más descriptivo al usuario
            Swal.fire('Error', 'No se encontraron productos con la categoria especificada.', 'error');
          } else {
            Swal.fire('Error', 'Ocurrió un error al filtrar por categoria.', 'error');
          }
        }
      );
    }
  }

  salirDelModal() {
    // Esta función se encarga de cerrar el modal
    $('#modalVerPor').modal('close');
  }

  buscarPorFecha() {
    const fechaSeleccionada = ($('#fechaInput').val() as string);

    if (fechaSeleccionada) {
      this.productoService.mostrarPorFechaVenta(fechaSeleccionada).subscribe(
        (respuesta: any) => {
          console.log('Respuesta del servidor:', respuesta);

          if (respuesta && respuesta.hasOwnProperty('id_venta')) {
            this.resultadosVentasPorFecha = [respuesta];
          } else if (Array.isArray(respuesta)) {
            this.resultadosVentasPorFecha = respuesta;
          } else {
            console.error('La respuesta del servidor no es válida.');
          }

          // Asigna la respuesta del servidor para mostrarla en el modal
          this.respuestaServidor = respuesta;
        },
        (error) => {
          console.error('Error al obtener ventas por fecha:', error);

          if (error.status === 404) {
            // Muestra un mensaje más descriptivo al usuario
            Swal.fire('Error', 'No se encontraron ventas de la fecha seleccionada.', 'error');
          } else {
            Swal.fire('Error', 'Ocurrió un error al buscar la venta.', 'error');
          }
        }
      );
    } else {
      console.log('Fecha no seleccionada');
    }
  }

  mostrarPorFecha() {
    // Abre el modal
    $('#modalMostrarPor').modal('open');
  }
  salirDelModalFecha() {
    // Cierra el modal solo si hay resultados
    if (this.resultadosVentasPorFecha.length > 0) {
      $('#modalMostrarPor').modal('close');
    }
  }

  calcularTotal(id_venta: any) {
    console.log('ID de venta:', id_venta); // Agrega esta línea para verificar el valor
    if (id_venta) {
      this.productoService.mostrar_Totalventa(id_venta).subscribe(
        (respuesta) => {
          // Éxito: actualiza la variable resultadoTotal con la respuesta del servidor
          this.resultadoTotal = respuesta;
          // Puedes mostrar el resultado como prefieras (alert, consola, etc.)
          console.log('Resultado Total:', this.resultadoTotal);
        },
        (error) => {
          // Error: maneja el error como desees (puedes mostrar un mensaje al usuario, por ejemplo)
          console.error('Error al obtener el total:', error);

          if (error.status === 404) {
            // Muestra un mensaje más descriptivo al usuario
            Swal.fire('Error', 'No se encontró el número de venta.', 'error');
          } else {
            Swal.fire('Error', 'Ocurrió un error al buscar el número de venta.', 'error');
          }
        }
      );
    }
  }

  ngOnInit(): void {
    M.AutoInit();
    // Inicializar el datepicker
    const options = {
      format: 'yyyy-mm-dd', // Puedes ajustar el formato según tus necesidades
      autoClose: true,
    };
    const datepicker = document.querySelector('.datepicker');
    M.Datepicker.init(datepicker, options);
  }
}