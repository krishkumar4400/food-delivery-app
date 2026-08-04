FROM node:22-alpine

WORKDIR /fooddel/app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "node", "server.js" ]
