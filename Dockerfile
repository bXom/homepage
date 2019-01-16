FROM ubuntu:18.04

FROM node

COPY . /app

WORKDIR /app

RUN npm install

EXPOSE 8080

CMD node app.js

