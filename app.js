const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Hello, Devon's World!</title>
  </head>
  <body>
    <h1>Welcome to my Webpage!</h1>
    <p>The time on ${os.hostname()} (server) is ${new Date().toLocaleString()}</p>
    <p>Rolled a coin toss${Math.floor(Math.random() * 2) + 1}</p>
    <p>The D6 rolled a ${Math.floor(Math.random() * 6) + 1}</p>
    <p>The D20 rolled a ${Math.floor(Math.random() * 20) + 1}</p>
  </body>
</html>`);
});

const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});