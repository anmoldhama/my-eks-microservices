# Use official Node.js image
FROM node:18-alpine

WORKDIR /app

COPY package.json ./
RUN yarn install --production

COPY . .

EXPOSE 3000
CMD ["node", "src/index.js"]
