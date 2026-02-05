#!/usr/bin/env bash

set -e

tee /etc/yum.repos.d/nodesource-nodejs.repo > /dev/null <<EOF
[nodesource-nodejs]
baseurl=https://rpm.nodesource.com/pub_23.x/nodistro/nodejs/x86_64
gpgkey=https://rpm.nodesource.com/gpgkey/ns-operations-public.key
EOF
yum install -y nodejs

# Add app to a known location
tee /usr/local/sbin/app.js > /dev/null << "EOF"
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

const port = process.env.PORT || 80;
server.listen(port,() => {
  console.log(`Listening on port ${port}`);
});
EOF

# Create systemd to start app.js automatically
tee /lib/systemd/system/app.service > /dev/null << "EOF"
[Unit]
Description=Node.js App Service
After=network-online.target local-fs.target
Wants=network-online.target

[Service]
Type=simple
WorkingDirectory=/usr/local/sbin/
ExecStart=/usr/bin/nohup /usr/bin/node ./app.js
Restart=always
RestartSec=5
KillSignal=SIGINT
TimeoutStopSec=30
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
EOF

# Reload systemd and enable service
systemctl daemon-reexec
systemctl daemon-reload
systemctl enable app.service
systemctl start app.service