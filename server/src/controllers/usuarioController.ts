import { Request, Response } from 'express';
import pool from '../database';

class UsuarioController {
    public async insertar_usuario(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO usuario set ?", [req.body]);
        res.json(resp);
    }
    public async eliminar_usuario(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM usuario WHERE id_usuario = ${id}`);
        res.json(resp);
    }
    public async mostrar_usuario(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const respuesta = await pool.query('SELECT * FROM usuario WHERE id_usuario = ?', [id]);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'Usuario no encontrado' });
    }
    public async modificar_usuario(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query("UPDATE usuario set ? WHERE id_usuario = ?", [req.body, id]);
        res.json(resp);
    }
    public async mostrar_Todos_usuario(req: Request, res: Response): Promise<void> {
        const respuesta = await pool.query('SELECT * FROM usuario ');
        res.json(respuesta);
    }
    //consulta nueva
    public async ValidarUsuario(req: Request, res: Response): Promise<void> {
        const parametros = req.body;
        var consulta = `SELECT id_usuario, nombre_us FROM usuario WHERE correo_us = '${parametros.correo_us}' AND contrasena_us = '${parametros.contrasena_us}'`;
        const resp = await pool.query(consulta);
        if(resp.length>0)
            res.json(resp[0]);
        else
            res.json({"id":"-1"});
        //res.json(null);
        //console.log(consulta);
    }
}
export const usuarioController = new UsuarioController();