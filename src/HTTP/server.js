const http = require('http');

const HOST = '127.0.0.1';
const PORT = 8080;
const users = [];


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/plain' });

    if(req.method == 'POST') {
        let registered = '';
        req.on('data', chunk => {
            registered += chunk.toString();
            users.push(chunk.toString()); 
            res.end(`${registered} successfully registered`);
        });
    } else if(req.method == 'DELETE') {
        req.on('data', recedingUser => {   
        const modified = users.filter( (value) => {

            return value != recedingUser;
        });
            res.end(`${recedingUser} deleted`);
        })
    }
});

server.on('connection', () => {
    console.log('client connected to server');
})

server.listen(PORT, HOST, () => {
    console.log(`server is listening port: ${PORT}`);
})