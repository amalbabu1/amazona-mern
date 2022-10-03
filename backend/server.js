import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/api/product/slug/:slug', (req, res) => {
  const param = req.params.slug;
  const product = data.products.find((product) => product.slug === param);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost: ${port}`);
});
