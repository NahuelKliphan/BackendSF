import Factura from '../models/Factura';

export async function obtenerFacturas(req, res) {
    try {
        const facturas = await Factura.findAll();
        res.json(
            facturas
        );
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}

export async function crearFactura(req, res) {
    try {
        const factura = await Factura.create({
            tipo: req.body.tipo,
            fecha: req.body.fecha,
            clienteNombre: req.body.cliente.nombre,
            clienteCuit: req.body.cliente.cuit,
            clienteDireccion: req.body.cliente.direccion
        });
        if (factura) {
            res.status(201).json({
                data: factura
            });
        } else {
            res.json({
                data: {}
            })
        }
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}

export async function obtenerFactura(req, res) {
    try {
        const factura = await Factura.findOne({
            where: { id: req.params.idFactura }
        });

        if (factura) {
            res.json({
                data: factura
            });
        } else {
            res.json({
                data: {}
            })
        }
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}

export async function borrarFactura(req, res) {
    try {
        const cantidadFilasBorradas = await Factura.destroy({
            where: { id: req.params.idFactura }
        })
        res.json({
            data: {},
            message: `Se eliminaron ${cantidadFilasBorradas} factura`
        })
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}