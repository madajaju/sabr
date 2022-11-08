FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

COPY . .

RUN npm install

ENV AILTIRE_PORT=3001

EXPOSE 3001

CMD [ "node", "server.js" ]
