FROM node:18-alpine

WORKDIR /app

# Copy package file
COPY package.json ./

# Install ALL dependencies (including dev dependencies for build)
RUN npm install

# Copy app files
COPY . .

# Build the app
RUN npm run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]