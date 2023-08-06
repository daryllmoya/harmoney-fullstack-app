# Stage 1: Build the Next.js app
FROM node:18-alpine AS next-builder

# Set the working directory for the Next.js app
WORKDIR /app/test-ui

# Copy the package.json and yarn.lock files for Next.js
COPY package.json yarn.lock ./

# Install dependencies for Next.js
RUN yarn install

# Copy the entire Next.js app to the container
COPY . .

# Build the Next.js app
RUN yarn build

# Stage 2: Lighter layer
FROM node:18-alpine

# Set the working directory for the combined app
WORKDIR /app

# Copy the built output from the build stage
COPY --from=next-builder /app/test-ui/.next/standalone/ ./test-ui/standalone/
COPY --from=next-builder /app/test-ui/.next/static/ ./test-ui/standalone/.next/static/
COPY --from=next-builder /app/test-ui/public/ ./test-ui/standalone/public/

ENV PORT=3001

# Expose the port
EXPOSE 3001

CMD ["node", "./test-ui/standalone/server.js"]
