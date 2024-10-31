# Etapa 1: Compilación
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4000
CMD ["node", "dist/frontend/server/server.mjs"]


