const http = require(
    'http'
);

const server = http.createServer(
    (req, res) => {
  res.writeHead(
    200,
     { 'Content-Type': 'text/plain'

      });
  res.end(
    `Hello, Jeff's World!!!!
    
    The time on the server is: ${new Date().toString()}
    `
);          
});

const port = process.env.PORT || 8080;

server.listen(
    port,
    () => {
  console.log(`Listening on port ${port}`);
    }
);
