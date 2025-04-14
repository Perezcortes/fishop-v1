"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productoController_1 = require("../controllers/productoController");
class productoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //this.router.get('/', (req, res) => res.send('probando ruta'));
        this.router.post('/insertarProducto/', productoController_1.productoController.insertar_producto);
        this.router.delete('/eliminarProducto/:id', productoController_1.productoController.eliminar_producto);
        this.router.put('/modificarProducto/:id', productoController_1.productoController.modificar_producto);
        this.router.get('/mostrarTodosProducto/', productoController_1.productoController.mostrar_Todos_producto);
        this.router.get('/mostrarProducto/:id', productoController_1.productoController.mostrar_producto);
        this.router.get('/mostrarCategoriaProducto/:id', productoController_1.productoController.mostrar_Categoria_producto);
        this.router.get('/mostrarMarcaProducto/:id', productoController_1.productoController.mostrar_Marca_producto);
        this.router.get('/mostrarporMarcaProducto/:nombre_marca', productoController_1.productoController.mostrar_porMarca_producto);
        this.router.get('/mostrarCantidadProducto/:id', productoController_1.productoController.mostrar_Cantidad_producto);
        //nueva consulta
        this.router.get('/obtenerNombreProducto/:id', productoController_1.productoController.obtenerNombrePorId);
    }
}
const ProductoRoutes = new productoRoutes();
exports.default = ProductoRoutes.router;
