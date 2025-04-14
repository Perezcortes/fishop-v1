"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioController_1 = require("../controllers/usuarioController");
class usuarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //this.router.get('/', (req, res) => res.send('probando ruta'));
        this.router.post('/insertarUsuario/', usuarioController_1.usuarioController.insertar_usuario);
        this.router.delete('/eliminarUsuario/:id', usuarioController_1.usuarioController.eliminar_usuario);
        this.router.put('/modificarUsuario/:id', usuarioController_1.usuarioController.modificar_usuario);
        this.router.get('/mostrarTodosUsuario/', usuarioController_1.usuarioController.mostrar_Todos_usuario);
        this.router.get('/mostrarUsuario/:id', usuarioController_1.usuarioController.mostrar_usuario);
        this.router.post('/ValidarUsuario/', usuarioController_1.usuarioController.ValidarUsuario);
    }
}
const UsuarioRoutes = new usuarioRoutes();
exports.default = UsuarioRoutes.router;
