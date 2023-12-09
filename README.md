# Fastify POC

## Setup

1. Install dependencies
```shell
npm install
```
2. Copy `.env.example` to `.env` and fill in your database connection details
```shell
cp .env.example .env
```
3. Run database migrations
```shell
npx prisma migrate dev --name init
```
4. Start the server
```shell
docker compose up
```
