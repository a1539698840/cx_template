const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io')
const socket = new Server(server)

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});
socket.on('connection', (io) => {
    console.log(io,"socket已连接");
})
server.listen(4456, () => {
    console.log('serve已启动');
});