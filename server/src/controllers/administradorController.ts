import { Request, Response } from 'express';
import pool from '../database';

class AdministradorController {
    public async insertar_administrador(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO administrador set ?", [req.body]);
        res.json(resp);
    }
    public async eliminar_administrador(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM administrador WHERE id_admin = ${id}`);
        res.json(resp);
    }
    public async mostrar_administrador(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const respuesta = await pool.query('SELECT * FROM administrador WHERE id_admin = ?', [id]);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'administrador no encontrado' });
    }
    public async modificar_administrador(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query("UPDATE administrador set ? WHERE id_admin = ?", [req.body, id]);
        res.json(resp);
    }
    public async mostrar_Todos_administrador(req: Request, res: Response): Promise<void> {
        const respuesta = await pool.query('SELECT * FROM administrador ');
        res.json(respuesta);
    }
    public async ValidarAdministrador(req: Request, res: Response): Promise<void> {
        const parametros = req.body;
        var consulta = `SELECT id_admin FROM administrador WHERE correo_admin = '${parametros.correo_admin}' AND contrasena_admin = '${parametros.contrasena_admin}'`;
        const resp = await pool.query(consulta);
        if(resp.length>0)
            res.json(resp);
        else
            res.json({"id":"-1"});
        //res.json(null);
        //console.log(consulta);
    }
}
export const administradorController = new AdministradorController();