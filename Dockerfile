# Build phase
FROM node:14 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Run phase
FROM node:14-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=build /app/build /app/build

# Set the correct port for Cloud Run
ENV PORT 8080
EXPOSE 8080

CMD ["serve", "-s", "build", "-l", "8080"]
