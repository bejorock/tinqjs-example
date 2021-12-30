FROM node:14-slim

ARG url

RUN apt update

RUN apt install -y curl

WORKDIR /etc/app

COPY . .

RUN chmod +x ./build/setup.sh

RUN ./build/setup.sh

#WORKDIR /etc/app

#RUN git clone $url /etc/app

RUN npm install -g @tinqjs/tinjs-cli

CMD ["code-server"]