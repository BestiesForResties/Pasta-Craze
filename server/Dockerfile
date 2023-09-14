FROM node:16

WORKDIR /pasta-craze

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]
