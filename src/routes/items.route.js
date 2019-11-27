import { Router } from 'express';
import { obtenerItems, crearItem} from '../controllers/items.controller';


const itemsRutas = Router()

itemsRutas.get('/:idFactura', obtenerItems);
itemsRutas.post('/', crearItem);


export default itemsRutas;


