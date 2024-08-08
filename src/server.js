const express = require('express');
const swaggerUi = require('swagger-ui-express');

const { v4:uuidv4 } = require('uuid');

const app = express();

const router = require('./routes/index');
const swaggerFile = require('./swagger.json');

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3333, ()=>{
    console.log("Nosso servidor está rodando.");
});