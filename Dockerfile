FROM node:18-bullseye-slim AS dev

WORKDIR /app
RUN apt-get update
RUN apt-get install -y openssl
COPY ./package.json ./pnpm-lock.yaml ./
RUN corepack enable
COPY . .
RUN pnpm install
RUN pnpm prisma generate
EXPOSE 3000