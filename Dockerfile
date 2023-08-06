# Stage 1: Build the Nest.js app
FROM node:18-alpine AS nest-builder

# Set the working directory for the Nest.js app
WORKDIR /app/test-api

# Copy the package.json and yarn.lock files for Nest.js
COPY harmoney-test-api/package.json harmoney-test-api/yarn.lock ./

# Install dependencies for Nest.js
RUN yarn install

# Copy the entire Nest.js app to the container
COPY harmoney-test-api/ .

# Build the Nest.js app
RUN yarn build

# Stage 2: Build the Next.js app
FROM node:18-alpine AS next-builder

# Set the working directory for the Next.js app
WORKDIR /app/test-ui

# Copy the package.json and yarn.lock files for Next.js
COPY harmoney-test-ui/package.json harmoney-test-ui/yarn.lock ./

# Install dependencies for Next.js
RUN yarn install

# Copy the entire Next.js app to the container
COPY harmoney-test-ui/ .

# Build the Next.js app
RUN yarn build

# Stage 3: Combine both apps into a single container
FROM node:18-alpine

# Set the working directory for the combined app
WORKDIR /app

# Copy the built output from the Nest.js and Next.js stages
COPY --from=nest-builder /app/test-api/node_modules/ ./test-api/node_modules/
COPY --from=nest-builder /app/test-api/dist/ ./test-api/dist/
COPY --from=next-builder /app/test-ui/.next/standalone/ ./test-ui/standalone/
COPY --from=next-builder /app/test-ui/.next/static/ ./test-ui/standalone/.next/static/
COPY --from=next-builder /app/test-ui/public/ ./test-ui/standalone/public/

ENV PORT=3001

# Expose the ports for both apps (3001 for Next.js, 3000 for Nest.js)
EXPOSE 3000
EXPOSE 3001

# Copy the start/stop scripts to the container
COPY entrypoint.sh ./

# Make the shell scripts executable
RUN chmod +x entrypoint.sh

CMD ["./entrypoint.sh"]
