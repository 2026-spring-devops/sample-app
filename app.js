const http = require(
    'http'
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

The time on the server is ${new Date().toLocaleString()}

The D6 rolled a ${Math.floor(Math.random() * 6) + 1}

The D20 rolled a ${Math.floor(Math.random() * 20) + 1}
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