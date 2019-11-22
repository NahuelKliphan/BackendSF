import Cliente from '../models/Producto';

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