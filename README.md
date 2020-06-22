# delilah-resto-restaurant
API desarrollada para orden y entrega de comida a domicilio.

# Pasos para desplegar el proyecto

1. Al descargar el proyecto hay una carpeta llamada resources la cual contiene:
    * el archivo .mysql con el script a ejecutar en mysql
    * el archivo .yaml con la documentacion de swagger
    * el archivo .mwb que contiene el modelo de entidades del proyecto
    * el archivo .postman_collection que contiene todas las solicitudes del proyecto listas para ejecutar en postman
    * el archivo .postman_environment que contiene las variables de entorno para poder ejecutar las solicitdes del proyecto
    *NOTA: Dentro del script se genera ya por defecto la parametrizacion de los estados (nuevo, confirmado, entregado..etc), como tambien se asignan dos usuarios por defecto uno administrador y otro sin rol de administrador con el fin de que sus tokens ya esten parametrizados en las variables de entorno*
2. Para ejecutar el proyecto se establece en el archivo main.js que corra en el puerto 3000, si se desea cambiar es necesario tambien modificar la variable de entorno {{URL_BASE}} con la url y puerto respectivo que desee correr.
