import Sequelize from 'sequelize';
import database from '../database/database';

const Item = database.define('items', {
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
    },
    cantidad: {
        type: Sequelize.INTEGER
    },
    iva: {
        type: Sequelize.DECIMAL
    },
    subtotal: {
        type: Sequelize.DECIMAL
    },
    factura_id: {
        type: INTEGER
    }

})

export default Item;
