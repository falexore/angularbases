// Instalar el servidor express
const path = require('path');
const express = require('express');
const app = express();

// Servir solo los archivos estáticos del directorio dist
app.use(express.static(__dirname + '/dist/angularbases'));

app.get('/ *', function(req, res) {

    res.sendFile(path.join(__dirname + '/dist/angularbases/index.html'));
});

// Inicie la aplicación escuchando en el puerto predeterminado de Heroku
app.listen(process.env.PORT || 8080);