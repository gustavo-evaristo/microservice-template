FROM node:alpine

WORKDIR /usr/app

COPY . ./

RUN yarn && yarn build && yarn db:generate

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]