const fs = require("fs");
const crypto = require('crypto');

class UserManager {
    
    constructor(file) {
        this.file = file;
    }

    async GetAllUsers() {
        try {
            const users = await fs.promises.readFile(this.file, "utf-8");
            
            return JSON.parse(users);
        } catch (error) {
            //console.error(error);
            
            return [];
        }
    }

    async CreateUser(user) {
        const newUser = {
            Name: user.Name ?? "Sin Nombre",
            LastName: user.LastName ?? "Sin Apellido",
            User: user.User ?? "Sin Edad",
            Password: this.getHash(user.Password) ?? ""
        };
        
        const users = await this.GetAllUsers();

        if(this.ExistUser(newUser.User, users)) {
            return "El usuario ya existe!";
        }

        users.push(newUser);

        try {
            await fs.promises.writeFile(this.file, JSON.stringify(users, null, "\t"));

            return "Usuario creado correctamente!";
        } catch(e) {
            return "Error al crear el usuario";
        }
    }

    async UserValidator(user) {
        const userValidate = {
            User: user.User,
            Password: user.Password
        }

        const users = await this.GetAllUsers();

        for (let key in users) {
            if (userValidate.User === users[key].User) {
                return (this.getHash(userValidate.Password) === users[key].Password) ?
                "Usuario Logueado!" :
                "Contraseña incorrecta!";
            }
        }
    }

    getHash(password) {
        return crypto.createHash('sha256').update(password).digest('hex');
    }

    ExistUser(User, Users){

        for (let key in Users) {

            if (User === Users[key].User) {
                return true;
            }
        }

        return false;
    }
}

module.exports = UserManager;