export const getAllProducts = (req, res) => {
  res.status(200).json([{ id: 1, name: 'Todos los Productos' }]);
};

export const getProductById = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ id, name: 'Producto By ID' });
};

export const createProduct = (req, res) => {
  const product = req.body;
  res.status(201).json({ message: 'Producto creado ', product });
};

export const deleteProduct = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Producto ${id} eliminado` });
};
