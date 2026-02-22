#!/usr/bin/env bash
set -euo pipefail

EXTENSIONS_DIR="~/.vscode-server/extensions"

main() {
    if [[ ! -d "$EXTENSIONS_DIR" ]]; then
        echo "Error: extensions directory not found: $EXTENSIONS_DIR" >&2
        exit 1
    fi

    # Collect all github.copilot-* subdirectories
    mapfile -t copilot_dirs < <(find "$EXTENSIONS_DIR" -maxdepth 1 -type d -name 'github.copilot-*')

    if [[ ${#copilot_dirs[@]} -eq 0 ]]; then
        exit 0
    fi

    for dir in "${copilot_dirs[@]}"; do
        # Restore owner rwx first in case the folder was previously locked to 000
        chmod u+rwx "$dir"

        # Remove all contents without deleting the folder itself
        find "$dir" -mindepth 1 -delete

        # Lock the folder so VS Code Server cannot unpack new content into it
        chmod 000 "$dir"
    done
}

main "$@"