import { Request, Response } from 'express';
import pool from '../database';

class CarritoController {
    public async insertar_carrito(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO carrito set ?", [req.body]);
        res.json(resp);
    }
    public async eliminar_carrito(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM carrito WHERE id_carrito = ${id}`);
        res.json(resp);
    }
    public async mostrar_carrito(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const respuesta = await pool.query('SELECT * FROM carrito WHERE id_carrito = ?', [id]);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'carrito no encontrado' });
    }
    public async modificar_carrito(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query("UPDATE carrito set ? WHERE id_carrito = ?", [req.body, id]);
        res.json(resp);
    }
    public async mostrar_Todos_carrito(req: Request, res: Response): Promise<void> {
        const respuesta = await pool.query('SELECT * FROM carrito ');
        res.json(respuesta);
    }
    public async mostrar_Estado_carrito(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query('SELECT estado_carrito FROM carrito WHERE id_carrito = ?', [id]);
        res.json(resp);
    }
}
export const carritoController = new CarritoController();