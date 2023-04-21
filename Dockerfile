# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Set the environment variable for the application's port
ENV PORT=80

# Expose the port that the application will listen on
EXPOSE $PORT

# Start the application
CMD [ "npm", "start" ]
