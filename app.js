var express = require('express'),
    app = express(),
    path = require('path'),
    cp = require('child_process'),
    server;

app.configure(function () {
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
});

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendfile(path.resolve(__dirname, path.join('public', 'index.html')));
});

server = app.listen(4000, function () {
    console.log('Listening on port %d', server.address().port);
});
