import chai from 'chai';
import mongoose from 'mongoose';

import User from '../src/dao/Users.dao.js';

const expect = chai.expect;

mongoose.connect('mongodb://127.0.0.1:27017/adoptme');


describe('Set de tests chai', () => {
    before(function () {
        this.usersDao = new User();
    })
    
    beforeEach(function() {
        //mongoose.connection.collections.users.drop();
        this.timeout(5000);
    })

    it('El DAO debe devolver todos los usuarios en un arreglo', async function() {

        const result = await this.usersDao.get();
        expect(Array.isArray(result)).to.be.deep.equal(true);
    })
})