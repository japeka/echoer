FROM node:18.12.1-alpine

LABEL maintainer="Janne Kalliokulju <janne.kalliokulju@gmail.com>"

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

RUN npm install -g @sitecore-jss/sitecore-jss-cli

COPY . .

RUN npm run build

EXPOSE 3000

ENV PORT 3000

CMD ["npm","start"]