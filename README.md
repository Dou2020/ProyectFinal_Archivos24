# ProyectFinal_Archivos24


Correr el docker File del Backend ubicarse en el archivo Backend y correr el comando:

docker build . -t node-api

ejecutar el contenedor anteriormente creado  -p "exterior":"interior"

docker run --env-file=./.env -p 3001:3001 node-api

incializar el docker-compose
docker-compose build

docker-compose up


