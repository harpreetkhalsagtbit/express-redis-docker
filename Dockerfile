# Use Node latest
FROM node:latest

# Setup app working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
# RUN npm install

# Start app
CMD [ "npm", "start" ]