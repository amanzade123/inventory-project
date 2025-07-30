const express = require('express');
const cors = require('cors');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swagger');

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');

app.use(cors());
app.use(express.json());

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Mount routes directly at root level
app.use('/', authRoutes);         // /register, /login
app.use('/products', productRoutes); // /products, /products/:id

module.exports = app;
