import Item from '../models/Item';
import Factura from '../models/Factura';


export async function obtenerItems(req, res) {
  try {
    const items = await Item.findAll({
      where: {idFactura: req.params.idFactura}
    });
   
    if(items){
      res.json(
        items
    );
    }
    
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
  }
}

export async function crearItem(req,res){
  try{
      var idFactura = await Factura.max('id').then(result => {
      idFactura = result;
    })
    console.log(this.idFactura);
    const items = await Item.create({
      codigo: req.body.codigo,
      descripcion: req.body.descripcion,
      precioUnitario: req.body.precioUnitario,
      cantidad: req.body.cantidad,
      iva: req.body.iva,
      subtotal: req.body.subtotal,
      facturaId: idFactura
    });
    if (items){
      res.status(201).json(items)
    } else {
      res.json(items)
    }
  }
  catch (e){

  }
}

