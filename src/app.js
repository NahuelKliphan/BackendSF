import express from 'express';
import morgan from 'morgan';
import database from './database/database';

//importamos rutas
import productosRutas from './routes/productos.route';
import clientesRutas from './routes/clientes.route';

//load config to cors
const config = require('./config');
//inicilizar express
const app = express();
//middleware
app.use(morgan('dev'));
app.use(express.json());

//rutas
app.use('/api/productos', productosRutas);
app.use('/api/clientes', clientesRutas)

//cors
const cors = require('cors');
app.use(cors(
  config.application.cors.server
))
//sincronizacion con la db
//sacar force: true borra base
database.sync()
  .then(() => console.log('Base actualizada'));

//exportamos app
export default app;