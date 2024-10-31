FROM node:alpine

WORKDIR /app

COPY . /app

RUN npm install -g @angular/cli

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]

# Usa la imagen oficial de Node.js como base
FROM node:alpine AS build

# Define el directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos de configuración de tu proyecto
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Construye la aplicación
RUN npm run build --prod

# Usa una imagen de Nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos construidos en la imagen anterior al servidor Nginx
COPY --from=build /usr/src/app/dist/mi-aplicacion-angular /usr/share/nginx/html

# Expone el puerto en el que Nginx estará escuchando
EXPOSE 42020

# Comando por defecto para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]

