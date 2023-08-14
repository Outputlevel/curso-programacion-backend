const UserManager = require('./UserManager');

const UM = new UserManager('./Usuarios.json');

const newUser = {
    Name: "Lucas",
    LastName: "Suleta",
    User: "Luck",
    Password: "CoderHouse123"
}

/*
UM.CreateUser(newUser).then((response) => {
    console.log(response);
});
*/

UM.UserValidator({
    User: "Luck",
    Password: "coderhouse123"
}).then((result) => {
    console.log(result);
});
