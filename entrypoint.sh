#!/bin/sh

# Start Next.js app in the background
cd ./test-ui/standalone
node server.js &

# Start Nest.js app
cd ../../test-api/dist
node main.js &
