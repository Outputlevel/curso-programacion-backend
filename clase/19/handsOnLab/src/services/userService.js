import userModel from "../models/userModel.js";
import crypto from "crypto";

class UserService {

    async createUser(user) {
        try {
            user.password = this.getHash(user.password);
            return await userModel.create(user);
        } catch (error) {
            throw new Error(error.message.replace(/"/g, "'"));
        }
    }

    async login(email, password) {
        try {
            const user = await userModel.find({email: email});

            if (user.length > 0 && user[0].password === this.getHash(password)) {
                return user[0];
            }
            
            throw new Error('Login failed');

        } catch (error) {
            throw new Error(error.message.replace(/"/g, "'"));
        }
    }

    getHash(password) {
        return crypto.createHash('sha256').update(password).digest('hex');
    }
}

export default UserService;