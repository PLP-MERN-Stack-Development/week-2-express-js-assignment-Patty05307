const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// ✅ Authentication middleware
const authMiddleware = (req, res, next) => {
  const auth = req.headers.authorization;
  if (auth === 'Bearer secret-token') {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

// ✅ In-memory product database
let products = [
  {
    id: '1',
    name: 'Laptop',
    description: 'High-performance laptop with 16GB RAM',
    price: 1200,
    category: 'electronics',
    inStock: true,
  },
  {
    id: '2',
    name: 'Smartphone',
    description: 'Latest model with 128GB storage',
    price: 800,
    category: 'electronics',
    inStock: true,
  },
  {
    id: '3',
    name: 'Coffee Maker',
    description: 'Programmable coffee maker with timer',
    price: 50,
    category: 'kitchen',
    inStock: false,
  },
];

// ✅ Create a router for all product-related routes
const productRouter = express.Router();

// Apply authentication middleware to all product routes
productRouter.use(authMiddleware);

// ✅ GET all products
productRouter.get('/', (req, res) => {
  res.json(products);
});

// ✅ GET product by ID
productRouter.get('/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

// ✅ POST new product
productRouter.post('/', (req, res) => {
  const { name, description, price, category, inStock } = req.body;
  if (!name || price === undefined) {
    return res.status(400).json({ error: 'Name and price are required' });
  }

  const newProduct = {
    id: uuidv4(),
    name,
    description: description || '',
    price,
    category: category || 'general',
    inStock: inStock !== undefined ? inStock : true,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// ✅ PUT update a product
productRouter.put('/:id', (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Product not found' });

  const updatedProduct = { ...products[index], ...req.body, id: products[index].id };
  products[index] = updatedProduct;
  res.json(updatedProduct);
});

// ✅ DELETE a product
productRouter.delete('/:id', (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Product not found' });

  products.splice(index, 1);
  res.status(204).send(); // 204 No Content
});

// ✅ Mount the product routes on /api/products
app.use('/api/products', productRouter);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Product API! Use /api/products for the API.');
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
