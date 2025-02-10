# Dockerfile for Node.js backend
FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ ./
EXPOSE 5500
CMD ["node", "index.js"]