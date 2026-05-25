FROM node:24
WORKDIR /server

COPY . .
RUN npm install && npm install express multer cors dotenv

EXPOSE 3000
CMD [ "node", "server.js" ]