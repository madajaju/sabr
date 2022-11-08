FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

COPY . .

RUN npm install

ENV AILTIRE_PORT=3002

EXPOSE 3002

CMD [ "node", "server.js" ]
