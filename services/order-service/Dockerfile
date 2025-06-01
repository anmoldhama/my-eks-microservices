# Use official Node.js image
FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN yarn install --production

COPY . .

EXPOSE 3001
CMD ["node", "src/index.js"]
