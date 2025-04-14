import { Router } from 'express';
import { ventaController } from '../controllers/ventaController'
import { } from '../middleware/auth';
class ventaRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        //this.router.get('/', (req, res) => res.send('probando ruta'));
        this.router.post('/insertarVenta/',  ventaController.insertar_venta);
        this.router.delete('/eliminarVenta/:id', ventaController.eliminar_venta);
        this.router.put('/modificarVenta/:id',  ventaController.modificar_venta);
        this.router.get('/mostrarTodasVenta/', ventaController.mostrar_Todas_venta);
        this.router.get('/mostrarVenta/:id',  ventaController.mostrar_venta);
        this.router.get('/mostrarporFechaVenta/:fecha',  ventaController.mostrar_porFecha_venta);
        this.router.get('/mostrarTotalVenta/:id',  ventaController.mostrar_Totalventa);
        this.router.get('/mostrarCarritoVenta/:id',  ventaController.mostrar_Carritoventa);
    }
}
const VentaRoutes = new ventaRoutes();
export default VentaRoutes.router;