var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));

app.get('*', function(req, res) {
    // load the single view file (angular will handle the page changes on the front-end )
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, function() {
    console.log('Example app listening on port ' + port)
});
