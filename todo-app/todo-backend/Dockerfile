FROM node:16

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm ci 

ENV PORT 3000

COPY . .

CMD ["npm", "run", "dev"]


