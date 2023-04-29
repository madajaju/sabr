FROM madajaju/sabr_service

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY bundle.js ./bundle.js
COPY policies.js ./policies.js

ENV AILTIRE_PORT=3000
ENV SABR_DEF=./bundle.js
ENV SABR_NAME="USVTrackChecker"
ENV SABR_POLICIES=./policies.js
ENV SABR_PROVISION_URL=localhost/web
ENV SABR_SERVICE_ID=USVTrackChecker
ENV PULSAR_HOST=pulsar:6650
ENV PULSAR_ADMIN=pulsar:8080

CMD [ "node", "server.js" ]
