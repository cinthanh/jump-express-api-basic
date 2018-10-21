// CREATE SERVER NODE
// require http
const http  = require('http');
const app   = require('./app');
// create port
const port  = process.env.PORT || 3000;
// render server
const server = http.createServer(app);
// listiner port
server.listen(port);