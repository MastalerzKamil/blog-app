# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

EXPOSE 3000

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY . /app
COPY package.json /app/package.json
RUN npm install
RUN npm install -g react-scripts@3.0.1

# start app
CMD ["npm", "start"]