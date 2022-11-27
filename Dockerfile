FROM node:latest


RUN mkdir -p /home/app

COPY . /home/app

EXPOSE 3001