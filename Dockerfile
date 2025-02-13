# Use node Image to build the react app
FROM node:18-alpine AS builder
WORKDIR /app
RUN npm install
COPY package.json package-lock.json ./

# Use Nginx to serve the app
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
