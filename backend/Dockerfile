# Use a Node.js base image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install --production

# Copy the rest of the application files
COPY . .

# Expose the port that the app listens on
EXPOSE 5000

# Command to run the app
CMD ["node", "index.js"]
