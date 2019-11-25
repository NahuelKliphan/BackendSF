import { Router } from 'express';
import { obtenerFacturas, crearFactura, obtenerFactura, borrarFactura} from '../controllers/facturas.controller';

const facturasRutas = Router();

facturasRutas.get('/', obtenerFacturas);
facturasRutas.get('/:idFactura', obtenerFactura);
facturasRutas.post('/', crearFactura);
facturasRutas.delete('/:idFactura', borrarFactura);


export default facturasRutas;