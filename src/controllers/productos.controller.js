import Producto from '../models/Producto';

export async function obtenerProductos(req, res) {
  try {
    const productos = await Producto.findAll();
    res.json(
        productos
    );

  } catch (e) {
    res.status(500).json({
      error: e.message
    })
  }
}
export async function crearProducto(req, res) {
  
  try {
    const producto = await Producto.create({
      codigo: req.body.codigo,
      descripcion: req.body.descripcion,
      precioUnitario: req.body.precioUnitario
    });
    if(producto) {
      res.status(201).json({
        data: producto
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

export async function obtenerProducto(req, res) {
  try {
    const producto = await Producto.findOne({
      where: { id: req.params.idProducto }
    });
  
    if(producto) {
      res.json(
        producto
      );
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

export async function borrarProducto(req, res) {
  try {
    const cantidadFilasBorradas = await Producto.destroy({
      where: { id: req.params.idProducto }
    })
    res.json({
      data: {},
      message: `Se eliminaron ${cantidadFilasBorradas} productos`
    })
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
  }
}

export async function modificarProducto(req, res) {
  try {
    const producto = await Producto.findOne({
      where: { id: req.params.idProducto }
    })

    if(producto) {
      const productoModificado = await producto.update({
        codigo: req.body.codigo,
        descripcion: req.body.descripcion,
        precioUnitario: req.body.precioUnitario

      })

      res.json({
        data: productoModificado
      })
    } else {
      res.status(404).json({
        data: {},
        message: 'No se encontro el producto'
      })
    }
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
  }
}