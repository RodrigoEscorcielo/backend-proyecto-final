import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './modules/products/products.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Funciona');
});

app.use((req, res) => {
  res.status(404).json({ error: 'Error'});
});

app.use((err, req, res, next) => {
  console.error('Error :', err);
  res.status(500).json({ error: 'Error'});
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
