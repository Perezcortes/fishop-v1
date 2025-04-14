"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ventaController_1 = require("../controllers/ventaController");
class ventaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //this.router.get('/', (req, res) => res.send('probando ruta'));
        this.router.post('/insertarVenta/', ventaController_1.ventaController.insertar_venta);
        this.router.delete('/eliminarVenta/:id', ventaController_1.ventaController.eliminar_venta);
        this.router.put('/modificarVenta/:id', ventaController_1.ventaController.modificar_venta);
        this.router.get('/mostrarTodasVenta/', ventaController_1.ventaController.mostrar_Todas_venta);
        this.router.get('/mostrarVenta/:id', ventaController_1.ventaController.mostrar_venta);
        this.router.get('/mostrarporFechaVenta/:fecha', ventaController_1.ventaController.mostrar_porFecha_venta);
        this.router.get('/mostrarTotalVenta/:id', ventaController_1.ventaController.mostrar_Totalventa);
        this.router.get('/mostrarCarritoVenta/:id', ventaController_1.ventaController.mostrar_Carritoventa);
    }
}
const VentaRoutes = new ventaRoutes();
exports.default = VentaRoutes.router;
