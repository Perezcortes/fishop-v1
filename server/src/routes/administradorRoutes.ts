import { Router } from 'express';
import { administradorController } from '../controllers/administradorController'
import { validarToken } from '../middleware/auth';
class administradorRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        //this.router.get('/', (req, res) => res.send('probando ruta'));
        this.router.post('/insertarAdministrador/', administradorController.insertar_administrador);
        this.router.delete('/eliminarAdministrador/:id', administradorController.eliminar_administrador);
        this.router.put('/modificarAdministrador/:id', administradorController.modificar_administrador);
        this.router.get('/mostrarTodosAdministrador/', administradorController.mostrar_Todos_administrador);
        this.router.get('/mostrarAdministrador/:id', administradorController.mostrar_administrador);
        this.router.post('/ValidarAdministrador/', administradorController.ValidarAdministrador);
    }
}
const AdministradorRoutes = new administradorRoutes();
export default AdministradorRoutes.router;