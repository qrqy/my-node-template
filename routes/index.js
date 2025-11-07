const express = require('express');
const router = express.Router();

// Import routes
const userRoutes = require('./user');

// Use routes
router.use('/users', userRoutes);

// Add more routes here as your app grows
// router.use('/posts', postRoutes);
// router.use('/auth', authRoutes);

module.exports = router;