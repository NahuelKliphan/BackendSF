import express from 'express';
import morgan from 'morgan';
import database from './database/database';

//importamos rutas
import productosRutas from './routes/productos.route';
import clientesRutas from './routes/clientes.route';

//inicilizar express
const app = express();

//middleware
app.use(morgan('dev'));
app.use(express.json());

//rutas
app.use('/api/productos', productosRutas);
app.use('/api/clientes', clientesRutas)
//sincronizacion con la db
//sacar force: true borra base
database.sync()
  .then(() => console.log('Base actualizada'));

//exportamos app
export default app;