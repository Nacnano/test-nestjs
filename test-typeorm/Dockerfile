FROM node:16.16-alpine
WORKDIR /test-typeorm
COPY . .
RUN npm install pnpm && pnpm
CMD ["pnpm", "start"]