const axios = require("axios");
const { dirname } = require("path");
//se guarda en una constante porque no debe ser modificado un paquete y le damos un .promises al paquete para traerlo con esa funcionalidad.
const fs = require("fs").promises;
//path nos ayudara con las rutas donde almacenaremos nuestros archivos.
const path = require("path");
const main = async () => {
  let response = await axios.get("https://rickandmortyapi.com/api/character");
  //desestructuro data de nuestra respuesta(la que nos dio por terminal la variable response)  saco results
  //declaro una variable con el contenido de respons y las especificaciones de data:results
  let {
    data: { results },
  } = response;
  //otro filtro mas pero ahora utilizo el apartado results.
  const characters = results.map(({ id, name, status, species }) => {
    return {
      id,
      name,
      status,
      species,
    };
  });
  const caracteres = characters
    .map((character) => Object.values(character).join(", "))
    .join("\n");

  const titulo = Object.keys(characters[0]).join(",");

  const union = titulo.concat("\n", caracteres);
  //devuelve el path en donde nos enmcontramos.
  //console.log(__dirname);
  //crear un path con argumentos usando joint
  //console.log(path.join(__dirname, 'data.csv'));
  //fs trabaja con promesas xeso el await,whrite file recibe dos parametros el primerom el path y el segundo los datos que almacenaras en ese archivo
  //se crea el archivo y se graban los datos creados en ela rchivos creado data.csv
  await fs.writeFile(path.join(__dirname, "data.csv"), union);
  console.log(union);
};
main();
