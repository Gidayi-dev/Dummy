# Start from the official Node.js image
# alpine means a tiny version of Linux — keeps the container small
FROM node:20-alpine

# Create a folder inside the container called /app
# All our code will live here
WORKDIR /app

# Copy package.json first — before copying source code
# Why? Docker builds in layers. If package.json hasn't changed,
# Docker reuses the cached npm install layer. Faster rebuilds.
COPY package*.json ./

# Install dependencies inside the container
RUN npm install

# Now copy the rest of the source code
COPY . .

# Compile TypeScript to JavaScript
RUN npm run build

# Tell Docker this container listens on port 3002
EXPOSE 3002

# The command that runs when the container starts
CMD ["node", "dist/index.js"]