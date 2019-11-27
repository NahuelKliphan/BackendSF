import { Router } from 'express';
import { obtenerFacturas, crearFactura, obtenerFactura, borrarFactura} from '../controllers/facturas.controller';
import { defaultCipherList } from 'constants';
import { agregarItem } from '../controllers/items.controller';

const itemsRutas = Router()

itemsRutas.post('/', agregarItem)

export default itemsRutas