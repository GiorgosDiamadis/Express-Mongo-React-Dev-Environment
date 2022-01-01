FROM ubuntu

WORKDIR /usr/app/React

RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_16.x  | bash -
RUN apt-get -y install nodejs
RUN npm install npm --global
RUN npm install nodemon --global
COPY . .


EXPOSE 5000
CMD [ "tail","-f","/dev/null"]