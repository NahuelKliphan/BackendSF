import express from 'express';
import morgan from 'morgan';
import database from './database/database';

//importamos rutas
import productosRutas from './routes/productos.route';
import clientesRutas from './routes/clientes.route';
import facturasRutas from './routes/facturas.route';
import itemsRutas from './routes/items.route';

//inicilizar express
const app = express();
//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(function(req, res, next) { //Permite cualquier conexion al server. Quitarlo desencadenara desastres que ningun mortal esta preparado para aguantar
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","*")
  next();
});

//rutas
app.use('/api/productos', productosRutas);
app.use('/api/clientes', clientesRutas);
app.use('/api/facturas',facturasRutas);
app.use('/api/items', itemsRutas);

//sincronizacion con la db
//sacar force: true borra base
database.sync()
  .then(() => console.log('Base actualizada'));

//exportamos app
export default app;