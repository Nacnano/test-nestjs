FROM node:16.16-alpine
WORKDIR /test-typeorm
COPY . .
RUN npm install pnpm
RUN pnpm
CMD ["pnpm", "start"]