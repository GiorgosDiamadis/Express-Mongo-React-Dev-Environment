FROM ubuntu
WORKDIR /usr/app/Express
RUN chmod -R 777 /usr/app/Express
RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_16.x  | bash -
RUN apt-get -y install nodejs
RUN npm install npm --global
RUN npm install nodemon --global
COPY . .
CMD ["npm","install"]

EXPOSE 3000
CMD [ "nodemon","index.js"]