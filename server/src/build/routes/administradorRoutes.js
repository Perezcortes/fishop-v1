"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const administradorController_1 = require("../controllers/administradorController");
class administradorRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //this.router.get('/', (req, res) => res.send('probando ruta'));
        this.router.post('/insertarAdministrador/', administradorController_1.administradorController.insertar_administrador);
        this.router.delete('/eliminarAdministrador/:id', administradorController_1.administradorController.eliminar_administrador);
        this.router.put('/modificarAdministrador/:id', administradorController_1.administradorController.modificar_administrador);
        this.router.get('/mostrarTodosAdministrador/', administradorController_1.administradorController.mostrar_Todos_administrador);
        this.router.get('/mostrarAdministrador/:id', administradorController_1.administradorController.mostrar_administrador);
        this.router.post('/ValidarAdministrador/', administradorController_1.administradorController.ValidarAdministrador);
    }
}
const AdministradorRoutes = new administradorRoutes();
exports.default = AdministradorRoutes.router;
