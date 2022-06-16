const net = require('net');

const PORT = 3000;

const server = net.createServer((connection) => {
    console.log('client connected');

    connection.on('end', () => {
        console.log('client disconnected');
    });

    connection.write('Hello  World!\r\n');
    connection.pipe(connection);

});

server.listen(PORT, () => {
    console.log(`server is listening port ${PORT}`);
});