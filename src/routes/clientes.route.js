import { Router } from 'express'
import { obtenerClientes } from '../controllers/clientes.controller'

const clientesRutas = Router();

clientesRutas.get('/clientes', obtenerClientes)

export default clientesRutas