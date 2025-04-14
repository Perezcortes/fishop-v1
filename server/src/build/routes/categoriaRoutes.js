"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriaController_1 = require("../controllers/categoriaController");
class categoriaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //this.router.get('/', (req, res) => res.send('probando ruta'));
        this.router.post('/insertarCategoria/', categoriaController_1.categoriaController.insertar_categoria);
        this.router.delete('/eliminarCategoria/:id', categoriaController_1.categoriaController.eliminar_categoria);
        this.router.put('/modificarCategoria/:id', categoriaController_1.categoriaController.modificar_categoria);
        this.router.get('/mostrarTodasCategoria/', categoriaController_1.categoriaController.mostrar_Todas_categoria);
        this.router.get('/mostrarCategoria/:id', categoriaController_1.categoriaController.mostrar_categoria);
    }
}
const CategoriaRoutes = new categoriaRoutes();
exports.default = CategoriaRoutes.router;
