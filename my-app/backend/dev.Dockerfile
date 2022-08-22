FROM node:alpine

WORKDIR /app

COPY . .

RUN NODE_ENV=development npm ci

CMD [ "npm", "run", "dev" ]