# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Install dependencies
RUN npm install

# Make port 3000 available to the world outside the container
EXPOSE 3000

# Define environment variable for port
ENV PORT=3000

# Run the app when the container starts
CMD ["npm", "start"]
