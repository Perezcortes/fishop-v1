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
exports.usuarioController = void 0;
const database_1 = __importDefault(require("../database"));
class UsuarioController {
    insertar_usuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield database_1.default.query("INSERT INTO usuario set ?", [req.body]);
            res.json(resp);
        });
    }
    eliminar_usuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM usuario WHERE id_usuario = ${id}`);
            res.json(resp);
        });
    }
    mostrar_usuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const respuesta = yield database_1.default.query('SELECT * FROM usuario WHERE id_usuario = ?', [id]);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'Usuario no encontrado' });
        });
    }
    modificar_usuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resp = yield database_1.default.query("UPDATE usuario set ? WHERE id_usuario = ?", [req.body, id]);
            res.json(resp);
        });
    }
    mostrar_Todos_usuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield database_1.default.query('SELECT * FROM usuario ');
            res.json(respuesta);
        });
    }
    //consulta nueva
    ValidarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const parametros = req.body;
            var consulta = `SELECT id_usuario, nombre_us FROM usuario WHERE correo_us = '${parametros.correo_us}' AND contrasena_us = '${parametros.contrasena_us}'`;
            const resp = yield database_1.default.query(consulta);
            if (resp.length > 0)
                res.json(resp[0]);
            else
                res.json({ "id": "-1" });
            //res.json(null);
            //console.log(consulta);
        });
    }
}
exports.usuarioController = new UsuarioController();
