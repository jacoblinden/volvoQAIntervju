FROM node:latest
WORKDIR /usr/lib/wdio

COPY package.json /usr/lib/wdio
COPY package-lock.json /usr/lib/wdio

RUN npm install 
COPY . /usr/lib/wdio
