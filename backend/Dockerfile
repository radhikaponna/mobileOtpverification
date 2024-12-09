# Use the official Node.js image as the base image
FROM node:22.9.0

# Set the working directory inside the container
WORKDIR /opt/ddtschema

# Install dependencies
COPY package*.json ./
RUN npm install

# Expose the port the app runs on
EXPOSE 8001

# Command to run the application
CMD ["npm", "start"]

