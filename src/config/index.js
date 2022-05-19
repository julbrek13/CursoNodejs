//dotenv ayuda a traer las variables que tenemos en el .env
//esta es la forma en la que trabaja dontenv
require("dotenv").config();

// odos los archivos  van a ser pequeños modulos

module.exports.Config = {
  //el objeto de ocnfig que sera exportado tendra las variables de entorno
  //en este ejemploa accedemos al port del .env
  port: process.env.PORT,
};