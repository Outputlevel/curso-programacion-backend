import toyModel from '../models/toyModel.js';

export default class ToyService {

    async getAll() {
        return toyModel.find();
    }

    async getByID(tid) {
        let error = null;
        const result = await toyModel.findOne({_id: tid});
        if (!result) error = `El juguete ${tid} no existe!`;

        return {error, result};
    }

    async create(toy) {
        let error = null;
        const result = await toyModel.create(toy);

        return {error, result}
    }
}