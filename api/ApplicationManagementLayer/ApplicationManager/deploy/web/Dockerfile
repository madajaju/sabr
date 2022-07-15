FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

RUN apk update
RUN apk upgrade
RUN apk add bash

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY deploy/web/package*.json ./

RUN npm install
RUN npm update

COPY . .

EXPOSE 3000
CMD [ "node", "deploy/web/server.js" ]
