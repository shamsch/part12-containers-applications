FROM node:16

WORKDIR /app

COPY . .

ENV REACT_APP_BACKEND_URL=http://localhost:3000

RUN npm install

CMD ["npm", "start"]