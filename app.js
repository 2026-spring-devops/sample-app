const http = require(
    'http'
);
const os = require(
    'os');
    

const port = process.env.PORT || 8080;

(http.createServer(
  (req, res) => {
    res.writeHead(
      200,
      {
        'Content-Type': 'text/plain'

      });
    res.end(
      `Hello, Jeff's World!!!!
    
    The time on ${os.hostname()} the (server) is: ${new Date().toString()}
    
    The D6 rolled a ${Math.floor(Math.random() * 6) + 1} 
    The D20 rolled a ${Math.floor(Math.random() * 20) + 1}`
    );
  })).listen(
    port,
    () => {
  console.log(`Listening on port ${port}`);
    }
);
