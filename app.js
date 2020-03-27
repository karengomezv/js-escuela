const express = require('express');
const app = express();
const port = 4000;
const router = require('./routes/index');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use(router);
app.listen(port, () => {
    console.log('Servidor escuchando por el puerto: ',port);
    app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}).on('error', err => {
        console.log('Error al inciar el servidor: ',err);
});


 
