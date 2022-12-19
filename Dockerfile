FROM node:16-alpine

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

EXPOSE 8181

CMD ["node", "build"]