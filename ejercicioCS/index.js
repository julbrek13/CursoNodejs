const axios = require("axios");
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
}).map((personaje) => Object.values(personaje).join(', '));
console.log(characters);
};
main();
