import Assert from 'assert';

import UserDTO from '../src/dto/User.dto.js';

const assert = Assert.strict;

describe('Testing Users DTO', () => {
    before(function () {
        this.mockUser = {
            first_name: 'Coder',
            last_name: 'House',
            email: 'coderpruebas@test.com',
            role: 'admin',
            password: 'test2023'
        }
    })

    it('El DTO debe unificar el nombre y apellido en una única propiedad.', function() {

        const result = UserDTO.getUserTokenFrom(this.mockUser);

        assert.strictEqual(
            result.name,
            `${this.mockUser.first_name} ${this.mockUser.last_name}`
        );
    })

    it('El DTO debe eliminar las propiedades innecesarias como password, first_name, last_name', function() {

        const result = UserDTO.getUserTokenFrom(this.mockUser);

        assert.strictEqual(
            typeof result.password,
            'undefined'
        );

        assert.strictEqual(
            typeof result.first_name,
            'undefined'
        );

        assert.strictEqual(
            typeof result.last_name,
            'undefined'
        );
    })
})