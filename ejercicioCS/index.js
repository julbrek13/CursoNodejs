const axios = require("axios");
const main = async () => {
let response = await axios.get("https://rickandmortyapi.com/api/character");
//desestructuro data de nuestra respuesta(la que nos dio por terminal la variable response)  saco results
let response = {data:{results}};

console.log(results);

main();
}