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
        res.end(`
        
Hello, Scott's World ! ! !

The time on ${os.hostname()} (server) is ${new Date().toLocaleString()}

The D4 rolled a ${Math.floor(Math.random() * 4) + 1}

The D10 rolled a ${Math.floor(Math.random() * 10) + 1}

The D16 rolled a ${Math.floor(Math.random() * 16) + 1}
`

        );          
    }
);

const port = process.env.PORT || 8080; 

server.listen(
    port,
    () => {
        console.log(`Listening on port ${port}`);
    }
);