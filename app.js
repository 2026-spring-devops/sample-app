const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(
`<html>
<h1>Hello, Brock's World!</h1>
<p><b>Hostname</b>: ${os.hostname()}<br>
<b>Server Time</b>: ${new Date().toLocaleString()}</p>

<p>The <b>D6</b> rolled a <b>${Math.floor( Math.random() * 6 ) + 1}</b><br>
The <b>D20</b> rolled a <b>${Math.floor( Math.random() * 20 ) + 1}</b></p>

<p>This page uses the content type of '<b>text/html</b>' instead of '<b>text/plain</b>' which allows for this HTML text here.</p>
</html>`
    );
});

const port = process.env.PORT || 8080;
server.listen(port,() => {
  console.log(`Listening on port ${port}`);
});