FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src/app-server
WORKDIR /usr/src/app-server

# Install app dependencies
COPY package*.json /usr/src/app-server

# Run
RUN npm install

# Bundle app source
COPY . /usr/src/app-server

# Command
CMD ["npm", "run", "dev"]