const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Название вашего API',
      version: '1.0.0',
      description: 'Описание API',
      contact: {
        name: 'Ваша команда/имя',
        email: 'email@example.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Локальный сервер',
      },
    ],
  },
  apis: ['./routes/*.js'], // путь к файлам с аннотациями для генерации доков
};

const specs = swaggerJsdoc(options);

function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}

module.exports = setupSwagger;
