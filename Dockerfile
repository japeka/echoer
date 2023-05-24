FROM node:18.12.1-alpine

LABEL maintainer="Janne Kalliokulju <janne.kalliokulju@gmail.com>"

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

RUN npm install -g @sitecore-jss/sitecore-jss-cli

COPY . .

RUN npm run build

EXPOSE $PORT

CMD ["npm", "run", "dev"]