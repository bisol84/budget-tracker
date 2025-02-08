FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src/app-client
WORKDIR /usr/src/app-client

# Install app dependencies
COPY package*.json /usr/src/app-client

# Run
RUN npm install

# Bundle app source
COPY . /usr/src/app-client

# Command
CMD ["npm", "run", "preview"]