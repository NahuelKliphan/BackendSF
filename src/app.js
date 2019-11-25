import express from 'express';
import morgan from 'morgan';
import database from './database/database';

//importamos rutas
import productosRutas from './routes/productos.route';
import clientesRutas from './routes/clientes.route';
import facturasRutas from './routes/facturas.route';


//inicilizar express
const app = express();
//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//rutas
app.use('/api/productos', productosRutas);
app.use('/api/clientes', clientesRutas);
app.use('/api/facturas',facturasRutas);

//cors

//sincronizacion con la db
//sacar force: true borra base
database.sync()
  .then(() => console.log('Base actualizada'));

//exportamos app
export default app;