# base image
FROM node:22-alpine

# work directory
WORKDIR /fooddel/app

# copy dependency files
COPY package*.json .

# install dependencies
RUN npm install

# copy source code
COPY . .

# port on which backend server is running
EXPOSE 8000

# start the server
CMD [ "node", "server.js" ]
