FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src/app-client
WORKDIR /usr/src/app-client

# Install app dependencies
COPY package*.json /usr/src/app-client

# Run (nécessaire pour build)
RUN npm install
RUN npm run build


# Bundle app source
COPY . /usr/src/app-client

# Command (+ port correction)
CMD ["npm", "run", "preview", "--", "--host"]