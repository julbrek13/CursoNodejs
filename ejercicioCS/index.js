const axios = require("axios");
const main = async () => {
let response = await axios.get("https://rickandmortyapi.com/api/character");
console.log(response);
}
main();