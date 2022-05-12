const axios = require("axios");
//se guarda en una constante porque no debe ser modificado un paquete y le damos un .promises al paquete para traerlo con esa funcionalidad. 
const fs = require('fs').promises;
//path nos ayudara con las rutas donde almacenaremos nuestros archivos.
const path = require('path');
const main = async () => {
let response = await axios.get("https://rickandmortyapi.com/api/character");
//desestructuro data de nuestra respuesta(la que nos dio por terminal la variable response)  saco results
//declaro una variable con el contenido de respons y las especificaciones de data:results
let {data:{results}} = response ;
//otro filtro mas pero ahora utilizo el apartado results.
let characters = results.map((character) => {
return{
id: character.id,
name: character.name,
status: character.status,
species: character.species,
};
//añado un nuevo map para que solo retorne lo valores
}).map((personaje) => Object.values(personaje).join(', ')).join("/n");
console.log(characters);
//devuelve el path en donde nos enmcontramos.
console.log(__dirname);
//crear un path con argumentos usando joint
console.log(path.join(__dirname, 'data.csv'));
};
main();
