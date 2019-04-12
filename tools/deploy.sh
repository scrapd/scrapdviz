#!/bin/bash
set -euo pipefail

# Define variables.
TOPDIR=$(git rev-parse --show-toplevel)

# Check for changes.
HAS_CHANGE=$(git status -s)
if [ -z "${HAS_CHANGE}" ]; then
  exit
fi

# If there are any, deploy them.
ghp-import -n -p -f -c viz.scrapd.org -m "Publish $(git describe)" out
