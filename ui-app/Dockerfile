# Stage 1: Build the Next.js app
FROM node:18-alpine AS next-builder

# Set the working directory for the Next.js app
WORKDIR /built-ui-app

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
WORKDIR /ui-app

# Copy the built output from the build stage
COPY --from=next-builder /built-ui-app/.next/standalone/ ./standalone/
COPY --from=next-builder /built-ui-app/.next/static/ ./standalone/.next/static/
COPY --from=next-builder /built-ui-app/public/ ./standalone/public/

ENV PORT=3001

# Expose the port
EXPOSE 3001

CMD ["node", "./standalone/server.js"]
