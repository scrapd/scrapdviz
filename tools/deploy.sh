#!/bin/bash
set -eo pipefail

# Define variables.
TOPDIR=$(git rev-parse --show-toplevel)

# Ensure we are in the right folder.
cd "${TOPDIR}" || exit 1

# Set the origin.
ORIGIN=$([ -n "${CIRCLECI}" ] && echo "origin" || echo "upstream")

# Deploy.
ghp-import -n -p -f -c viz.scrapd.org -r "${ORIGIN}" -m "Publish $(git describe)" out
