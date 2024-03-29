FROM node:20-alpine AS typescript-build

ARG PORT=80

WORKDIR /app

COPY . .

RUN npm install --omit=dev
RUN npm run build

FROM node:20-alpine AS typescript

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY --from=typescript-build /app/node_modules node_modules
COPY --from=typescript-build /app/lib .

EXPOSE $PORT

CMD ["node", "index.js"]
