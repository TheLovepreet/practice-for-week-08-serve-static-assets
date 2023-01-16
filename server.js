const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Your code here
  const htmlPage = fs.readFileSync('./index.html','utf-8');

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html')
  res.end(htmlPage);
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));