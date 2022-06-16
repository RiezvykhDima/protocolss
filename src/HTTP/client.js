const http = require('http');

const options = {
    host: '127.0.0.1',
    port: 8080,
    path: '/onix'
};

const req = http.request(options);

req.end(() => {
    console.log('request sent to server');
});

req.on('response', (info) => {
    console.log(`Got information prior to main response: ${info.statusCode}`);
});

