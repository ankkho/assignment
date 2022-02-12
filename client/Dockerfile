FROM node:14-alpine
WORKDIR /client

COPY . .

RUN yarn install --production --network-timeout 900000
RUN yarn build

COPY ./proto ./build
EXPOSE 3000

CMD ["yarn", "start"]
