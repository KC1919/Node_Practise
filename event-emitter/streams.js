import fs from 'fs';
import httpServer from 'http';

// const readable = fs.createReadStream('../read-me.txt');
const server = httpServer.createServer();

server.on('request', (req, res) => {

    const readable = fs.createReadStream('../read-me.txt');

    // Method 1 to read data as stream
    //in this the read speed is greater than the qrite speed, so there can be issues 
    // when there is very large amount of data
    // readable.on('data', data => {
    //     res.write(data);
    // });
    // readable.on('end', ()=>{
    //     res.end();
    // });

    // Method 2 to read data as stream, with optimization (piping the data as it is coming from the read stream)
    // what happens is that in normal Stream, the read stream reads the data at a very high 
    // speed but the write stream cannot match the speed of read stream so it cant write 
    // that fast as the data coming, so there is a back pressure, so we make use of pipe 
    // to equalize the speed, of speed of reading data == speed of writing data
    readable.pipe(res);
});

server.listen(5000, () => {
    console.log('Server listening on port 5000');
});

//------- Important points to remember -------------

// http response is also a writable stream

// stream works on event emitters, example, when reading , it uses readable.on('data'), 
// listener to read data

//http also works on events, example, server.on('request') is a event listener to listen 
// for incoming request fto the server

