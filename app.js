const http = require('http');

const os = require('os');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hello, Peter's World! $!$!$!\n
    The current time on ${os.hostname} is: ${new Date().toLocaleString()}
    The d20 rolled a ${Math.floor(Math.random() * 20) + 1}
    The d14 rolled a ${Math.floor(Math.random() * 14) + 1}
    The d100 rolled a ${Math.floor(Math.random() * 100) + 1}`);          
});

const port = process.env.PORT || 8080; 
server.listen(port,() => {
  console.log(`Listening on port ${port}`);
});