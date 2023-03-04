FROM docker:latest

WORKDIR /usr/src/app

# RUN apk update && apk add --update nodejs npm

# COPY package*.json ./

# RUN npm install

COPY . .

# EXPOSE 3000

CMD [ "./entrypoint.sh" ]

# CMD [ "./server.js" ]
