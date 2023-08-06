# Stage 1: Build the Nest.js app
FROM node:18-alpine AS nest-builder

# Set the working directory for the Nest.js app
WORKDIR /app/test-api

# Copy the package.json and yarn.lock files for Nest.js
COPY package.json yarn.lock ./

# Install dependencies for Nest.js
RUN yarn install

# Copy the entire Nest.js app to the container
COPY . .

# Build the Nest.js app
RUN yarn build

# Stage 2: Lighter layer
FROM node:18-alpine

# Set the working directory for the combined app
WORKDIR /app

# Copy the built output from the build stage
COPY --from=nest-builder /app/test-api/node_modules/ ./test-api/node_modules/
COPY --from=nest-builder /app/test-api/dist/ ./test-api/dist/

# Expose the port
EXPOSE 3000

CMD ["node", "./test-api/dist/main.js"]
