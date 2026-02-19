#!/usr/bin/env bash

set -e

tee /etc/yum.repos.d/nodesource-nodejs.repo > /dev/null <<EOF
[nodesource-nodejs]
baseurl=https://rpm.nodesource.com/pub_23.x/nodistro/nodejs/x86_64
gpgkey=https://rpm.nodesource.com/gpgkey/ns-operations-public.key
EOF
yum install -y nodejs git

# Download Git repository to a known location
# This way, we can just update app.js instead of both the userdata and app in the repo
mkdir -p /root
cd /root
git clone -b bpaulisse/chapter2-bash --single-branch https://github.com/2026-spring-devops/sample-app.git > /root/git.log

# Copy app to a known location
cp sample-app/src/app.js /usr/local/sbin
cp sample-app/src/.env /usr/local/sbin/app.env

# Create systemd to start app.js automatically
tee /lib/systemd/system/app.service > /dev/null << "EOF"
[Unit]
Description=Node.js App Service
After=network-online.target local-fs.target
Wants=network-online.target

[Service]
Type=simple
WorkingDirectory=/usr/local/sbin/
EnvironmentFile=/usr/local/sbin/app.env
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