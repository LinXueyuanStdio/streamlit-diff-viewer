#!/usr/bin/env bash

set -e

# Build Frontend
cd st-diff-viewer/frontend || exit
yarn install
yarn run build

# Build Python package
cd ../..
poetry version patch
poetry build

# Publish to PyPi
#poetry publish
14242
