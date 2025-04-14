"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const productoRoutes_1 = __importDefault(require("./routes/productoRoutes"));
const administradorRoutes_1 = __importDefault(require("./routes/administradorRoutes"));
const carritoRoutes_1 = __importDefault(require("./routes/carritoRoutes"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const ventaRoutes_1 = __importDefault(require("./routes/ventaRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
        this.app.use('/documentacion', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/api/producto', productoRoutes_1.default);
        this.app.use('/api/administrador', administradorRoutes_1.default);
        this.app.use('/api/carrito', carritoRoutes_1.default);
        this.app.use('/api/usuario', usuarioRoutes_1.default);
        this.app.use('/api/venta', ventaRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor montado en el puerto', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
