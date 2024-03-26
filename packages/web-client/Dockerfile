# Use a Node.js base image
FROM node:latest AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the entire project to the working directory
COPY . .

# Build the project
RUN yarn workspace @draftbash/web-client build

# Use a lightweight Node.js base image for serving the app
FROM node:alpine AS final

# Set the working directory in the container
WORKDIR /app

# Copy the build output from the previous stage to the final stage
COPY --from=build /app/build/web-client/src ./src

# Install serve to serve the app
RUN npm install -g serve

# Expose the port
EXPOSE 3000

# Command to run the app
CMD ["serve", "-s", "build", "-l", "3000"]