import mongoose from 'mongoose';
import Assert from 'assert';

import User from '../src/dao/Users.dao.js';

mongoose.connect('mongodb://127.0.0.1:27017/adoptme');

const assert = Assert.strict;

describe('Testing Users DAO', () => {
    before(function () {
        this.usersDao = new User();
        this.mockUser = {
            first_name: 'Coder',
            last_name: 'House',
            email: 'coderpruebas2@test.com',
            password: '1234'
        }
    })
    
    beforeEach(function() {
        this.timeout(5000);
    })

    it('El DAO debe devolver todos los usuarios en un arreglo', async function() {
        //console.log(this.usersDao);

        const result = await this.usersDao.get();
        assert.strictEqual(Array.isArray(result), true);
    })

    it('El Dao debe agregar un usuario correctamente a la base de datos', async function() {

        const result = await this.usersDao.save(this.mockUser);

        assert.ok(result._id);

        await this.usersDao.delete(result._id);
    })

    it('El Dao agregará al documento insertado un arreglo de mascotas vacío por defecto', async function() {
        
        const result = await this.usersDao.save(this.mockUser);

        assert.deepStrictEqual(result.pets, []);

        await this.usersDao.delete(result._id);
    })

    it('El Dao puede obtener a un usuario por email', async function() {
        const mockUser = {
            first_name: 'Coder',
            last_name: 'House',
            email: 'coderpruebas2@test.com',
            password: '1234'
        }
        const result = await this.usersDao.save(mockUser);

        const user = await this.usersDao.getBy({ email: result.email });

        assert.strictEqual(typeof user, 'object');

        await this.usersDao.delete(result._id);
    })
})