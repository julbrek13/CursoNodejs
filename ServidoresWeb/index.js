const express = require("express");
const service = require("./src/service");
//almaceno todos los datos del json mockdata

//EJECUTARE EXPRES LLAMANDO A EXpres desde esta app
const app = express();

const PORT = 3000;
//esta utilidad nos va a permitir recibnir datos tipo json desde nuestro cliente
app.use(express.json());
//le decimos a la aplicación que se encargue de escuchar las peticiones de nuestro servidor.
//recibe como paramtro la ruta y el controlador de la ruta.
//req= request(peticion del cliente))y res = response(la respuesta que enviaras al cliente)
//cada uno de estos se conocen como Mpoins o puntos finales.
app.post("/", (req, res) => {
  //req tiene un cuerpo(datos en la peticion envidados por el cliente) y este lo almaceno en newUser
  let newUser = req.body;

  res.json({
    message: "usuario creado",
    //creamos el usuario
    body: service.createUser(newUser),
  });
});

app.get("/", (req, res) => {
  //pruebo que devuelva data
  res.json({
    body: service.getUsers(),
  });
  //hay que cerrar y volver a abrir el servidor para ver los cambios(para que no suceda esto usaremos nodemon a constinucacion)
});
//ahora trabajermeos en la seccion de la ruta, aca podemos pedir parametros para enviar una respuesta adecuada.
//especifico que ademas de una ruta voy a recibir un id
app.get("/:id", (req, res) => {
  //mejoramos la sintaxis
  let {
    params: { id },
  } = req;
  let user = service.getUser(id);
  //pruebo que devuelva data
  res.json({
    message: `usuario ${id}`,
    body: user,
  });
  //hay que cerrar y volver a abrir el servidor para ver los cambios(para que no suceda esto usaremos nodemon a constinucacion)
});

//listen recibe un  un puerto que nos indica cuando este levantado y un callback
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
