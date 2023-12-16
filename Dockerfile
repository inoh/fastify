FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY dist .

EXPOSE 3000

CMD [ "node", "lambda" ]
