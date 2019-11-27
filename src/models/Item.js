import Sequelize from 'sequelize';
import database from '../database/database';
import Factura from './Factura';

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
    }
})
Item.belongsTo(Factura,{
    foreignKey: 'idFactura'     
});

export default Item;
