
FROM apachepulsar/pulsar-all

# Create app directory
WORKDIR /pulsar

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY . .

CMD [ "bin/pulsar", "standalone" ]
