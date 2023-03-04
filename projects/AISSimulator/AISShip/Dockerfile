FROM madajaju/sabr_service

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY bundle.js ./bundle.js
COPY policies.js ./policies.js
COPY ship.csv ./ship.csv

ENV AILTIRE_PORT=3000
ENV SABR_DEF=./bundle.js
ENV SABR_NAME="AISSHIP"
ENV SABR_POLICIES=./policies.js
ENV SABR_PROVISION_URL=localhost/web
ENV SABR_SERVICE_ID=ServiceInstance0
ENV PULSAR_HOST=172.30.32.1:6650
ENV SABR_PARAMETERS="sourceFile=./ship.csv"



CMD [ "node", "server.js" ]
