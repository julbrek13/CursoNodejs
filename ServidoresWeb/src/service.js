//se encargara del crud.
const data = require("./MOCK_DATA.json");

//formas para desarrollar modulos en node.
//esto quiere decir que va a ser exportado y puede ser utilizado por cualquier otro archivo
module.exports = {
  //construimos propiedades de objeto
  // el return esta implicito (devuelve data);
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
