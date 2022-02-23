FROM node:lts-alpine as builder

WORKDIR /app

COPY package.json yarn.lock .babelrc ./

RUN yarn install --frozen-lockfile

COPY . ./

RUN yarn build


FROM node:lts-alpine as dependencyBuilder

WORKDIR /app

COPY --from=builder /app/package.json /app/yarn.lock ./

RUN yarn install --production


FROM node:lts-alpine

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY --from=builder --chown=node:node /app/dist .

COPY --from=dependencyBuilder --chown=node:node /app/node_modules ./node_modules

EXPOSE 9000

CMD ["node", "index.js"]
