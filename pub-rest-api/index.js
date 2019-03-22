const express = require('express');
const pubService = require('pub-services').services.pubService;
const app = express();

app.get('/pubs', function (req, res) {
   pubs = pubService.listeAll();

   pubsOpen = pubService.listeOpen();

    //res.status(200).json();

   // res.send(pubs);

    res.send(pubs);
})
var server = app.listen(3000, function () {
    console.log('Listening on port %d', server.address().port);
});