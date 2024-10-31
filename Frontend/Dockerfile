# Etapa de construcción
FROM node:18 AS build

WORKDIR /app
# Copiar archivos de configuración de package
COPY package*.json ./
# Instalar dependencias
RUN npm install
# Copiar el resto de los archivos de la aplicación
COPY . .
# Construir la aplicación con SSR
RUN npm run build

# # Etapa de producción
FROM node:18
WORKDIR /app
# # Copiar los archivos construidos de la etapa anterior
COPY --from=build /app/dist/frontend ./dist/frontends
# # Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 4000
# # Comando para iniciar el servidor
CMD ["node", "dist/frontend/server/server.mjs"]

## 
# FROM nginx:alpine
# ADD ./config/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=build /app/dist /var/www/app/
# EXPOSE 80
# CMD [ "nginx","-g", "daemon off;" ]