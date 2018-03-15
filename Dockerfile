FROM node:9.4 as builder

WORKDIR /build

COPY . .

RUN ["rm", "-rf", "node_modules"]

RUN ["npm", "install"]

RUN ["npm", "run", "build"]

FROM arm32v7/node:9.4-slim

WORKDIR /app/HomeLocalHomepage

COPY --from=builder /build .

RUN ["rm", "-rf", "node_modules"];

RUN ["npm", "install", "--only=production"]

ENTRYPOINT [ "npm", "start" ]