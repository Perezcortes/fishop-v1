import { Request, Response } from 'express';
import pool from '../database';

class ProductoController {
    public async insertar_producto(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO producto set ?", [req.body]);
        res.json(resp);
    }
    public async eliminar_producto(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM producto WHERE id_producto = ${id}`);
        res.json(resp);
    }
    public async mostrar_producto(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const respuesta = await pool.query('SELECT * FROM producto WHERE id_producto = ?', [id]);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'Producto no encontrado' });
    }
    public async modificar_producto(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query("UPDATE producto set ? WHERE id_producto = ?", [req.body, id]);
        res.json(resp);
    }
    public async mostrar_Todos_producto(req: Request, res: Response): Promise<void> {
        const respuesta = await pool.query('SELECT * FROM producto ');
        res.json(respuesta);
    }
    public async mostrar_Categoria_producto(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const respuesta = await pool.query('SELECT categoria FROM producto WHERE id_producto = ?', [id]);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'Categoria no encontrada' });
    }
    public async mostrar_Marca_producto(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const respuesta = await pool.query('SELECT marca FROM producto WHERE id_producto = ?', [id]);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'Marca no encontrada' });
    }
    public async mostrar_porMarca_producto(req: Request, res: Response): Promise<void> {
        const { nombre_marca } = req.params;
        const respuesta = await pool.query('SELECT * FROM producto WHERE marca = ?', [nombre_marca]);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'Marca no encontrada' });
    }
    public async mostrar_Cantidad_producto(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const respuesta = await pool.query('SELECT cantidad FROM producto WHERE id_producto = ?', [id]);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'Cantidad no encontrada' });
    }
            //nueva consulta
    public async obtenerNombrePorId(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const respuesta = await pool.query('SELECT nombre FROM producto WHERE id_producto = ?', [id]);
    
        if (respuesta.length > 0) {
          res.json({ nombre: respuesta[0].nombre });
        } else {
          res.status(404).json({ mensaje: 'Nombre de producto no encontrado' });
        }
      }
}
export const productoController = new ProductoController();