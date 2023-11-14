import EventEmitter from 'events';
import httpServer from 'http';

const myEmitter = new EventEmitter();

myEmitter.on('message', name => {
    console.log(`Received a new message from: ${name}`);
})

myEmitter.emit('message', "Kunal");

const server = httpServer.createServer();

server.on('request', (req, res) => {
    console.log(req.url);
    res.setHeader('Content-Type', 'text/html');
    res.end("<h5>Hello from home!</h5>");
})

server.listen(3000, () => {
    console.log("Listening on port 3000");
})