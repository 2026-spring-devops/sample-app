const http = require(
    'http'
);

const os = require(
    'os'
);
//Changed it
const server = http.createServer(
    (req, res) => {
        res.writeHead(
            200, 
            { 
                'Content-Type': 'text/plain' 
            }
        );
        res.end(`Hello, Jay-Byrd's World ! ! !

The time on ${os.hostname()} the server is ${new Date().toLocaleString()}

The D6 rolled a ${Math.floor(Math.random() * 6) + 1}

The D20 rolled a ${Math.floor(Math.random() * 20) + 1}

The D30 rolled a ${Math.floor(Math.random() * 30) + 1}

The 2 D10 rolled a ${Math.floor(Math.random() * 100) + 1}

The coin toss was ${Math.random() < 0.5 ? 'Heads' : 'Tails'} 

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