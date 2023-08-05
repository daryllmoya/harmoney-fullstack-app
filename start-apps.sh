#!/bin/bash

# Change directory to the UI app
cd harmoney-test-ui
yarn start --port=3001 &

# Change directory to the API app
cd ..
cd harmoney-test-api
yarn start:prod &