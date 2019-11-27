import Item from '../models/Item';

export async function obtenerItems(req, res) {
  try {
    const items = await Item.findAll();
    res.json(
        items
    );

  } catch (e) {
    res.status(500).json({
      error: e.message
    })
  }
}

export async function agregarItem(req,res){
  try{
    const items = await Item.create({
      codigo: req.codigo,
      descripcion: req.descripcion,
      precioUnitario: req.precioUnitario,
      cantidad: req.cantidad,
      iva: req.iva,
      subtotal: req.subtotal
    });
    if (items){
      res.status(201).json(items)
    } else {
      res.json({data: {}
      })
    }
  }
  catch (e){

  }
}

