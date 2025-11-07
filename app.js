const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { sequelize } = require('./config/db');
const errorHandler = require('./middleware/error');

// Route imports
const apiRoutes = require('./routes'); // автоматически импортирует index.js

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get('/health', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.json({
      success: true,
      message: 'Service is healthy',
      database: 'Connected',
    });
  } catch (error) {
    res.status(503).json({
      success: false,
      message: 'Service unhealthy',
      database: 'Disconnected',
      error: error.message,
    });
  }
});

// API Routes - все API маршруты через один файл
app.use('/api', apiRoutes);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found',
  });
});

// Error handler
app.use(errorHandler);

module.exports = app;