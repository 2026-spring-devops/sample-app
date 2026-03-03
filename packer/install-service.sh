#!/bin/bash

set -e

systemctl daemon-reload # Reload service files
systemctl enable --now app.service # Enable the app if not enabled
systemctl restart app.service # Restart the app, in case the previous command didn't