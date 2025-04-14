import express, { Application } from 'express';
import swagger_ui_express from 'swagger-ui-express';
import productoRoutes from './routes/productoRoutes';
import administradorRoutes from './routes/administradorRoutes';
import carritoRoutes from './routes/carritoRoutes'; 
import usuarioRoutes from './routes/usuarioRoutes';
import ventaRoutes from './routes/ventaRoutes';
import morgan from 'morgan';
import cors from 'cors';
import swaggerDocument from './swagger.json';
class Server {
    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.app.use('/documentacion',swagger_ui_express.serve, swagger_ui_express.setup(swaggerDocument));
    }
    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }
    routes(): void {

        this.app.use('/api/producto', productoRoutes);
        this.app.use('/api/administrador', administradorRoutes);
        this.app.use('/api/carrito', carritoRoutes);
        this.app.use('/api/usuario', usuarioRoutes);
        this.app.use('/api/venta', ventaRoutes);
    }
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor montado en el puerto', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();