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

