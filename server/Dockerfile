FROM node:14-alpine
WORKDIR /server

COPY . .

# RUN yarn install --production --network-timeout 900000
RUN yarn build

COPY ./proto ./build

EXPOSE 6000
CMD [ "yarn", "start" ]
