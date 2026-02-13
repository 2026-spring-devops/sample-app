const http = require(
    'http'
);

const os = require(
    'os'
);

const server = http.createServer(
    (req, res) => {
        res.writeHead(
            200, 
            { 
                'Content-Type': 'text/plain' 
            }
        );
        res.end(`Hello, DevOp's World ! ! !

The time on ${os.hostname()} (server) is ${new Date().toLocaleString()}

The D6 rolled a ${Math.floor(Math.random() * 6) + 1}

The D20 rolled a ${Math.floor(Math.random() * 20) + 1}

The D4 rolled a ${Math.floor(Math.random() * 4) + 1}

The coin toss was ${(Math.floor(Math.random() * 2) + 1) == 1 ? 'HEADS' : 'TAILS'}
`
        );          
    }
);

// Oh yeah, this is where it reads the .env file...
const port = process.env.PORT || 8080; 

server.listen(
    port,
    () => {
        console.log(`Listening on port ${port}`);
    }
);