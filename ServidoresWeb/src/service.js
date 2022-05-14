//se encargara del crud.
const data = require("./MOCK_DATA.json");

//formas para desarrollar modulos en node.
//esto quiere decir que va a ser exportado y puede ser utilizado por cualquier otro archivo
module.exports = {
  //construimos propiedades de objeto
  // el return esta implicito (devuelve data);
  getUser: (id) => {
    //como id es un string con el metodo number lo convierto en entero.
    let identificador = Number(id);
    //retorna un arreglo con las coincidencias de la busqueda.
    let user = data.filter((persona) => persona.id === identificador)[0];
    return user;
  },
  getUsers: () => data,
  createUser: (dataUser) => {
    let newUser = {
      id: data.length + 1,
      //sprat operator
      ...dataUser,
    };
    //manda el nuevo
    data.push(newUser);

    //retrona el nuevo
    return newUser;
  },
};
