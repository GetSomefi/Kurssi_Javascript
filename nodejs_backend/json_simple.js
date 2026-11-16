// ohjelmien ajaminen 
// node json_simple.js 

const { createServer } = require('http'); // mahdollistaa palvelintoiminnallisuudet

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.statusCode = 200;
    const data = { 
        name: "Joe",
        age:"86"
    };
    res.end(JSON.stringify(data));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});