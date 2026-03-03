#!/bin/bash

set -e

sudo mv ~/app.js /usr/local/sbin
sudo mv ~/app.service /lib/systemd/system

sudo systemctl daemon-reload # Reload service files
sudo systemctl enable --now app.service # Enable the app if not enabled
sudo systemctl restart app.service # Restart the app, in case the previous command didn't