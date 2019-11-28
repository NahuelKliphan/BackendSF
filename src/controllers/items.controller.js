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


export async function crearItem(req, res) {
  
  const {codigo, cantidad, descripcion, precioUnitario, iva, subtotal} = req.body;
  
  var idFactura = await Factura.max('id');
  try {
      const item = await Item.create({
          codigo,
          cantidad,
          descripcion,
          precioUnitario,
          iva,
          subtotal,
          idFactura
      });

      if (item) {
          res.status(201).json(
              item
          );
      } else {
          res.json(
              {}
          );
      }
  }
  catch (e) {
      res.status(500).json({
          error: e.message
      });
  }

}

