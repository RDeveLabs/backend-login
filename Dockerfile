FROM node:24
WORKDIR /server

COPY . .

EXPOSE 3000
CMD [ "node", "server.js" ]