// cargar dependencias
var express = require('express'); // Load the module;
var app = express(); // Instance the server;
var ig = require('instagram-node').instagram(); // Load the instagram module;

// CONFIGURAR LA APP
// ======== RECURSOS ESTATICOS ========

app.use(express.static(__dirname + '/public')); // Where the statics file are located;
app.set('view engine', 'ejs'); // The format of the views;

ig.use({
  access_token: '[PIXELUN-TOKEN-HERE!]', // get access token here: http://instagram.pixelunion.net/
});

app.get('/', function(req, res) { // Create a index's route;
    ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) { // Call to the Instagram's API;
        res.render('pages/index', { grams: medias }); // Pass the JSON answer to the view;
    });

});

app.listen(8080); // Start the server on port 8080;

console.log('Server has started!'); // Sends the message by the console when the server starts;
