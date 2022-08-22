FROM node:latest 

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN CI=true npm run test 

RUN npm run build

RUN npm install -g serve

CMD ["serve", "build"]