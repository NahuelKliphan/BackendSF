import { Router } from 'express';
import { obtenerPoductos, crearPoducto, obtenerPoducto, borrarPoducto, modificarPoducto } from '../controllers/productos.controller';

const poductosRutas = Router();

provinciasRutas.get('/', obtenerPoductos);
provinciasRutas.get('/:idPoducto', obtenerPoducto);
provinciasRutas.post('/', crearPoducto);
provinciasRutas.put('/:idPoducto', modificarPoducto);
provinciasRutas.delete('/:idPoducto', borrarPoducto);

export default poductosRutas;