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
        res.end(`Hello, Tom's World ! ! !

The time on ${os.hostname()} (server) is ${new Date().toLocaleString()}

The D6 rolled a ${Math.floor(Math.random() * 6) + 1}

The D20 rolled a ${Math.floor(Math.random() * 20) + 1}
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