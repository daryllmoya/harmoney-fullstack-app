#!/bin/bash

# Get the process IDs of the apps started by start-apps.sh
PID_NEXTJS=$(pgrep -f "yarn start --port=3001")
PID_NESTJS=$(pgrep -f "yarn start:prod")

# Terminate the Next.js app
if [ -n "$PID_NEXTJS" ]; then
  echo "Terminating Next.js app (PID: $PID_NEXTJS)..."
  kill $PID_NEXTJS
else
  echo "Next.js app is not running."
fi

# Terminate the Nest.js app
if [ -n "$PID_NESTJS" ]; then
  echo "Terminating Nest.js app (PID: $PID_NESTJS)..."
  kill $PID_NESTJS
else
  echo "Nest.js app is not running."
fi
