# Use Node base image
FROM node:18

# Create app directory
WORKDIR /app

# Copy the full project (including server.js and src/)

COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose your server port
EXPOSE 8080

# Start the server
CMD ["npm", "start"]# Copy the full project (including server.js and src/)