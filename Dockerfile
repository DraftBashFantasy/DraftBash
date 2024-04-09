# Use an official Node.js runtime as a base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy shared dependencies from the root
COPY package*.json ./

# Install dependencies for all packages
RUN npm install

# Copy the rest of the application code
COPY . .

# Install dependencies for each package
WORKDIR /app/packages
RUN npm install

# Build TypeScript code for all packages
WORKDIR /app
RUN npx tsc

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["sh", "-c", "npx prisma migrate deploy --schema=./packages/infrastructure/src/persistence/schema.prisma && node dist/server/src/app.js"]