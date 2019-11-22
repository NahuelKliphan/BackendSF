import { Router } from 'express';
import { obtenerProductos, crearProducto, obtenerProducto, borrarProducto, modificarProducto } from '../controllers/productos.controller';

const productosRutas = Router();

productosRutas.get('/', obtenerProductos);
productosRutas.get('/:idProducto', obtenerProducto);
productosRutas.post('/', crearProducto);
productosRutas.put('/:idProducto', modificarProducto);
productosRutas.delete('/:idProducto', borrarProducto);


export default productosRutas;