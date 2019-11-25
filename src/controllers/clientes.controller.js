import Cliente from '../models/Cliente';

export async function obtenerClientes(req, res) {
  try {
    const clientes = await Cliente.findAll();
    res.json({
      data: clientes
    });
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
  }
}
export async function crearCliente(req, res) {
  console.log(req)
  console.log(res)
  try {
    const cliente = await Cliente.create({
      nombre: req.body.nombre,
      direccion: req.body.direccion,
      cuit: req.body.cuit
    });
    if(cliente) {
      res.status(201).json({
        data: cliente
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

export async function obtenerCliente(req, res) {
  try {
    const cliente = await Cliente.findOne({
      where: { id: req.params.idCliente }
    });
  
    if(cliente) {
      res.json({
        data: cliente
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

export async function borrarCliente(req, res) {
  try {
    const cantidadFilasBorradas = await Cliente.destroy({
      where: { id: req.params.idCliente }
    })
    res.json({
      data: {},
      message: `Se eliminaron ${cantidadFilasBorradas} clientes`
    })
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
  }
}

export async function modificarCliente(req, res) {
  try {
    const cliente = await Cliente.findOne({
      where: { id: req.params.idCliente }
    })

    if(cliente) {
      const clienteModificado = await cliente.update({
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        cuit: req.body.cuit
      })

      res.json({
        data: clienteModificado
      })
    } else {
      res.status(404).json({
        data: {},
        message: 'No se encontro el cliente'
      })
    }
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
  }
}