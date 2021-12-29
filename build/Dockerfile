FROM node:17-alpine

WORKDIR /etc/tinqjs

COPY . .

RUN chmod +x setup.sh && ./setup.sh

WORKDIR /etc/app

CMD ["code-server"]