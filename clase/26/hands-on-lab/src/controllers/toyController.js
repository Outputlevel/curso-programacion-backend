import ToyService from "../services/toyService.js";

export default class ToyController {

    constructor () {
        this.toyService = new ToyService();
    }

    async getAllToys() {
        return await this.toyService.getAll();
    }

    async getToyByID(tid) {
        const data = await this.toyService.getByID(tid);

        if (data.error) throw new Error(data.error);
        return data.result;
    }

    async createToy(toy) {
        const {name, description, creator_user} = toy;

        if (!name || !description || !creator_user) {
            throw new Error('Error al crear el juguete');
        }

        const data = await this.toyService.create({name, description, creator_user});

        if (data.error) throw new Error(data.error);
        return data.result;
    }
}