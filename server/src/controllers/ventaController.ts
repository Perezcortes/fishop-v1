import { Request, Response } from 'express';
import pool from '../database';

class VentaController {
    public async insertar_venta(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO venta set ?", [req.body]);
        res.json(resp);
    }
    public async eliminar_venta(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM venta WHERE id_venta = ${id}`);
        res.json(resp);
    }
    public async mostrar_venta(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const respuesta = await pool.query('SELECT * FROM venta WHERE id_venta = ?', [id]);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'venta no encontrado' });
    }
    public async modificar_venta(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query("UPDATE venta set ? WHERE id_venta = ?", [req.body, id]);
        res.json(resp);
    }
    public async mostrar_Todas_venta(req: Request, res: Response): Promise<void> {
        const respuesta = await pool.query('SELECT * FROM venta ');
        res.json(respuesta);
    }
    public async mostrar_porFecha_venta(req: Request, res: Response): Promise<void> {
        const { fecha } = req.params;
        const respuesta = await pool.query('SELECT * FROM venta WHERE fecha = ?', [fecha]);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'Fecha no encontrada' });
    }
    public async mostrar_Totalventa(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const respuesta = await pool.query('SELECT cantidad * precio_unitario AS Total_venta FROM venta WHERE id_venta = ?', [id]);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'No existe venta' });
    }
    public async mostrar_Carritoventa(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const respuesta = await pool.query('SELECT  * FROM carrito WHERE id_carrito = ?', [id]);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'No se encontro carrito' });
    }
}
export const ventaController = new VentaController();