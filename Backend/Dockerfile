# CREAR UNA IMAGEN DE node
FROM node:20-bullseye
# crear un dicrectiro de trabajo del contenedor
WORKDIR /app
# copiar todo el archivo donde esta a /app
COPY . .

RUN npm install

EXPOSE 3001

CMD [ "npm","start" ]
