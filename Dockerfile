FROM --platform=linux/amd64 node:16-alpine as build
# Use the official Node.js image as a base image
# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Use the official NGINX image as the base for the production image
FROM nginx:alpine

# Copy the built React app to the NGINX HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 8080

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
