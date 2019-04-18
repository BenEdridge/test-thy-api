const http = require('http');
const headers = require('./headers').default;

const server = http.createServer((req, res) => {

    res.writeHead(200, headers.defaultHeaders);

    if(req.url === '/'){
        res.write(JSON.stringify({ response: "Welcome" }));
    } else {
        res.write(JSON.stringify({ response : "Consult /" }));
    }
    res.end();
});

server.listen(3000, () => {
    console.log("Server listening");
});
