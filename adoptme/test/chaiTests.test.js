import chai from 'chai';
import mongoose from 'mongoose';

import User from '../src/dao/Users.dao.js';

const expect = chai.expect;

mongoose.connect('mongodb://127.0.0.1:27017/adoptme');


describe('Set de tests chai', () => {
    before(function () {
        this.usersDao = new User();
        this.mockUser = {
            first_name: 'Coder',
            last_name: 'House',
            email: 'coderpruebas@test.com',
            password: 'test2023'
        }
    })
    
    beforeEach(function() {
        mongoose.connection.collections.users.drop();
        this.timeout(5000);
    })

    it('El DAO debe devolver todos los usuarios en un arreglo', async function() {

        const result = await this.usersDao.get();
        expect(Array.isArray(result)).to.be.deep.equal(true);
    })

    it('El DAO debe agregar un usuario correctamente a la base de datos', async function() {

        const result = await this.usersDao.save(this.mockUser);

        expect(result).to.have.deep.property('_id');
    })

    it('El DAO agregará al documento insertado un arreglo de mascotas vacío por defecto', async function() {
        
        const result = await this.usersDao.save(this.mockUser);

        expect(result.pets).to.is.deep.equal([])
    })

    it('El DAO puede obtener a un usuario por email', async function() {
        const result = await this.usersDao.save(this.mockUser);

        const user = await this.usersDao.getBy({ email: result.email });

        expect(user).to.have.deep.property('_id');
    })

    it('El DAO actualiza correctamente al usuario', async function() {

        const first_name = 'Joaco';

        const insertedUser = await this.usersDao.save(this.mockUser);

        await this.usersDao.update(insertedUser._id, { first_name });

        const updatedUser = await this.usersDao.getBy({ _id: insertedUser._id});

        expect(updatedUser.first_name).is.not.equal(insertedUser.first_name);
    })

    it('El DAO elimina correctamente un usuario', async function() {

        const insertedUser = await this.usersDao.save(this.mockUser);

        await this.usersDao.delete(insertedUser._id);

        const result = await this.usersDao.getBy({ _id: insertedUser._id});

        expect(result).is.null;
    })
})