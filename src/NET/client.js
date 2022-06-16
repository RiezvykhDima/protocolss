const net = require('net');

const PORT = 3000;

const client = net.connect({
    port: PORT
}, () => {
    console.log('connected to server!');
});

client.on('data', (data) => {
    console.log(data.toString());
    client.end();

});

client.on('end', () => {
    console.log('disconnected from server');
});