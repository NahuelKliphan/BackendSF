import { Router } from 'express'
import { obtenerClientes,obtenerCliente,crearCliente,modificarCliente,borrarCliente } from '../controllers/clientes.controller'

const clientesRutas = Router();

clientesRutas.get('/', obtenerClientes);
clientesRutas.get('/:idCliente', obtenerCliente);
clientesRutas.post('/', crearCliente);
clientesRutas.put('/:idCliente', modificarCliente);
clientesRutas.delete('/:idCliente', borrarCliente);

export default clientesRutas










