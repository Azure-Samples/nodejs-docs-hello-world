FROM node:alpine

# RUN apt-get update -y
# RUN apt-get upgrade -y
# RUN apt-get install nodejs -y && apt-get install npm -y && apt-get install curl -y

# RUN npm cache clean -f
# RUN npm install -g n
# RUN n stable

WORKDIR /var/www
COPY package.json /var/www/
RUN npm install
COPY index.js /var/www/

EXPOSE 1337
