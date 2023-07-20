const ManagerUsuarios = require('./ManagerUsuarios');

const MU = new ManagerUsuarios("./Usuarios.json");

MU.CrearUsuario({
    Nombre: "Jorge",
    Edad: 44,
    Curso: "UX/UI"
}).then(() => {
    MU.ConsultarUsuarios().then((todos) => {
        console.log(todos);
    });
});
