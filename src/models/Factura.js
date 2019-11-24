import Sequalize from 'sequelize'
import database from '../database/database'

const Factura = database.define('facturas',{
    id:{
        type: Sequalize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo:{
        type : Sequalize.STRING
    },
    fecha:{
        type: Sequalize.DATE
    },
    clienteNombre:{
        type: Sequalize.STRING
    },
    clienteCuit:{
        type: Sequalize.STRING
    },
    clienteDireccion:{
        type: Sequalize.STRING
    },
    

})