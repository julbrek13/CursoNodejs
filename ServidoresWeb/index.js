const express = require("express");
const { request } = require("http");
//EJECUTARE EXPRES LLAMANDO A EXpres desde esta app
const app = express();
const PORT = 3000;
//le decimos a la aplicación que se encargue de escuchar las peticiones de nuestro servidor.
//recibe como paramtro la ruta y el controlador de la ruta.
//req= request(peticion del cliente))y res = response(la respuesta que enviaras al cliente)
app.get("/", (req, res) => {
  res.json({ message: "hola mundo desde express" });
});

//listen recibe un  un puerto que nos indica cuando este levantado y un callback
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
