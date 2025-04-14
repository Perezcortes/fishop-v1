"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.administradorController = void 0;
const database_1 = __importDefault(require("../database"));
class AdministradorController {
    insertar_administrador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield database_1.default.query("INSERT INTO administrador set ?", [req.body]);
            res.json(resp);
        });
    }
    eliminar_administrador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM administrador WHERE id_admin = ${id}`);
            res.json(resp);
        });
    }
    mostrar_administrador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const respuesta = yield database_1.default.query('SELECT * FROM administrador WHERE id_admin = ?', [id]);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'administrador no encontrado' });
        });
    }
    modificar_administrador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resp = yield database_1.default.query("UPDATE administrador set ? WHERE id_admin = ?", [req.body, id]);
            res.json(resp);
        });
    }
    mostrar_Todos_administrador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield database_1.default.query('SELECT * FROM administrador ');
            res.json(respuesta);
        });
    }
    ValidarAdministrador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const parametros = req.body;
            var consulta = `SELECT id_admin FROM administrador WHERE correo_admin = '${parametros.correo_admin}' AND contrasena_admin = '${parametros.contrasena_admin}'`;
            const resp = yield database_1.default.query(consulta);
            if (resp.length > 0)
                res.json(resp);
            else
                res.json({ "id": "-1" });
            //res.json(null);
            //console.log(consulta);
        });
    }
}
exports.administradorController = new AdministradorController();
