import Sequalize from 'sequelize';
import database from '../database/database';

const Cliente = database.define('clientes',{
    id:{
        type: Sequalize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo:{
        type: Sequalize.STRING
    },
    direccion:{
        type: Sequalize.STRING

    },
    cuit:{
        type: Sequalize.STRING
    }
});

export default Cliente