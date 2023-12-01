import Assert from 'assert';

import { createHash, passwordValidation } from '../src/utils/index.js';

const assert = Assert.strict;

describe('Testing createHash and passwordValidation', () => {
    before(function () {
        this.mockUser = {
            first_name: 'Coder',
            last_name: 'House',
            email: 'coderpruebas2@test.com',
            password: 'test2023'
        }
    })

    it('El servicio debe realizar un hasheo efectivo de la contraseña', async function() {

        const result = await createHash(this.mockUser.password);

        assert.notEqual(result, this.mockUser.password);
    })

    it('El hasheo realizado debe poder compararse de manera efectiva con la contraseña original', async function() {

        const hash = await createHash(this.mockUser.password);

        const result = await passwordValidation({password: hash}, this.mockUser.password);

        assert.equal(result, true);
    })

    it('Si la contraseña hasheada se altera, debe fallar en la comparación de la contraseña original', async function() {

        let hash = await createHash(this.mockUser.password);
        hash += 'test';

        const result = await passwordValidation({password: hash}, this.mockUser.password);

        assert.equal(result, false);
    })
})