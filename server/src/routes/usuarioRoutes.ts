import { Router } from 'express';
import { usuarioController } from '../controllers/usuarioController'
import { } from '../middleware/auth';
class usuarioRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        //this.router.get('/', (req, res) => res.send('probando ruta'));
        this.router.post('/insertarUsuario/', usuarioController.insertar_usuario);
        this.router.delete('/eliminarUsuario/:id', usuarioController.eliminar_usuario);
        this.router.put('/modificarUsuario/:id',  usuarioController.modificar_usuario);
        this.router.get('/mostrarTodosUsuario/', usuarioController.mostrar_Todos_usuario);
        this.router.get('/mostrarUsuario/:id',  usuarioController.mostrar_usuario);
        this.router.post('/ValidarUsuario/', usuarioController.ValidarUsuario);
    }
}
const UsuarioRoutes = new usuarioRoutes();
export default UsuarioRoutes.router;