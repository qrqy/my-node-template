const { Sequelize } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./user');

const models = {
  User,
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;