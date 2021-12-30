FROM node:17-alpine

ARG url

RUN apk add git

RUN apk add curl

WORKDIR /etc/tinqjs

COPY . .

RUN chmod +x setup.sh

RUN ./setup.sh

WORKDIR /etc/app

RUN git clone $url /etc/app

RUN npm install -g @tinqjs/tinjs-cli

CMD ["code-server"]