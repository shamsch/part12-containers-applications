FROM node:latest 

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN CI=true npm run test 

ENV REACT_APP_BACKEND_URL=http://localhost:3000

RUN npm run build

RUN npm install -g serve

CMD ["serve", "build"]