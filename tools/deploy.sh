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
cd "${TOPDIR}/out" || exit
git add .
git commit -m "Deploy to gh-pages"
git push origin gh-pages
cd -
