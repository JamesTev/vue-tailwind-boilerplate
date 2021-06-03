var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var history = require('connect-history-api-fallback');

app = express();
app.use(history());

app.use(serveStatic(__dirname + "/dist"));

var port = process.env.PORT || 8081;
var hostname = '127.0.0.1';

app.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
 });