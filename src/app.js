import express from 'express';
import morgan from 'morgan';
import database from './database/database';

//importamos rutas
import productosRutas from './routes/productos.route';
import clientesRutas from './routes/clientes.route';

const cors = require('cors');
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
<<<<<<< HEAD
const cors = require('cors');
app.use(cors(config.application.cors.server));

=======
var corsOptions = {
  origin: 'localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))
>>>>>>> a937f74ad6181911fe58fb5c8c0c06a109236fe7
//sincronizacion con la db
//sacar force: true borra base
database.sync()
  .then(() => console.log('Base actualizada'));

//exportamos app
export default app;