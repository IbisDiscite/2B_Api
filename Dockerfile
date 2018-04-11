FROM node:carbon-slim

# Create app directory
WORKDIR /git/examples-api

# Install app dependencies
COPY package.json /git/examples-api
RUN npm install

# Bundle app source
COPY . /git/examples-api
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]
