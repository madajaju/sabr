FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

RUN apk update
RUN apk upgrade
RUN apk add bash

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80
CMD [ "node", "index.js" ]
