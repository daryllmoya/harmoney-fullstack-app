#!/bin/bash

# Change directory to the UI app
cd ui-app
yarn dev &

# Change directory to the API app
cd ..
cd api-app
yarn start:dev &
