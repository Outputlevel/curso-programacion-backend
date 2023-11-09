#Definimos la imagen base: node
FROM node

#Creamos una carpeta interna donde vamos a guardar nuestro proyecto
WORKDIR /app

#Copiamos el package.json de nuestra carpeta actual a la carpeta de nuestra imagen
COPY package*.json ./

#Una vez copiado el package.json, procedemos a ejecutar un "npm install" dentro de esta carpeta interna
RUN npm install

#Copiamos todo el codigo a nuestra imagen
COPY . .

#Exponemos un puerto para que escuche a partir de un puerto de nuestra computadora.
EXPOSE 8080

#Una vez realizado todo, ejecutamos "npm start" para iniciar la aplicacion (Dicho comando debe estar presente en el package.json)
CMD [ "npm", "start" ]