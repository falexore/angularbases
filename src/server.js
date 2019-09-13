// Instalar el servidor express
const express = require ('express');
const path = require ('ruta');

aplicación const = express ();

// Servir solo los archivos estáticos del directorio dist
app.use (express.static (__ dirname + '/ dist / <name-of-app>'));

app.get ('/ *', function (req, res) {
    
res.sendFile (path.join (__ dirname + '/ dist / <name-of-app> /index.html'));
});

// Inicie la aplicación escuchando en el puerto predeterminado de Heroku
app.listen (process.env.PORT || 8080);