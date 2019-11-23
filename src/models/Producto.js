import Sequelize from 'sequelize';
import database from '../database/database';

const Producto = database.define('productos', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo:{
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    precioUnitario: {
        type: Sequelize.DECIMAL
    }
})

export default Producto;
