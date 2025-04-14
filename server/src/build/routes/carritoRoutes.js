"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carritoController_1 = require("../controllers/carritoController");
class carritoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //this.router.get('/', (req, res) => res.send('probando ruta'));
        this.router.post('/insertarCarrito/', carritoController_1.carritoController.insertar_carrito);
        this.router.delete('/eliminarCarrito/:id', carritoController_1.carritoController.eliminar_carrito);
        this.router.put('/modificarCarrito/:id', carritoController_1.carritoController.modificar_carrito);
        this.router.get('/mostrarTodosCarrito/', carritoController_1.carritoController.mostrar_Todos_carrito);
        this.router.get('/mostrarCarrito/:id', carritoController_1.carritoController.mostrar_carrito);
        this.router.get('/mostrarEstadoCarrito/:id', carritoController_1.carritoController.mostrar_Estado_carrito);
        //this.router.get('/mostrarporFechaCarrito/:fecha', carritoController.mostrar_porFecha_carrito);
    }
}
const CarritoRoutes = new carritoRoutes();
exports.default = CarritoRoutes.router;
