import chai from 'chai';
import supertest from 'supertest';

const expect = chai.expect;
const requester = supertest('http://localhost:8080');

describe('Testing Adoptme', () => {
    
    describe('Test de Mascotas', () => {
        it('El endpoint POST /api/pets debe crear una mascota correctamente', async ()=> {
            const petMock = {
                name: 'Patitas',
                specie: 'Pez',
                birthDate: '10-10-2022'
            }
            const {
                statusCode,
                ok,
                _body
            } = await requester.post('/api/pets').send(petMock);

            //console.log(statusCode);
            //console.log(ok);
            //console.log(_body);

            expect(_body.payload).to.have.property('_id');
        });

        it('El método PUT debe poder actualizar correctamente a una mascota determinada.', async ()=> {
            const petMock = {
                name: 'Patitas',
                specie: 'Pez',
                birthDate: '10-10-2022'
            }
            //Primero creo la mascota
            const { _body } = await requester.post('/api/pets').send(petMock);
            expect(_body.payload).to.have.property('_id');

            const result = await requester.put(`/api/pets/${_body.payload._id}`).send({name: 'Aletitas'});
            
            //expect(result._body.status).is.to.eqls('success');
            expect(result.statusCode).is.eqls(200);
        });
    });

    
    describe('Test avanzado', () => {
        let cookie;
        before(function () {
            this.mockUser = {
                first_name: 'Joaco',
                last_name: 'Cejas',
                email: 'jcejas2@test.com',
                password: 'test2023'
            }
        })
        it('Debe registrar correctamente a un usuario', async function() {
            
            const { _body } = await requester.post('/api/sessions/register').send(this.mockUser);

            //Sólo nos basta que esté definido el payload, indicando que tiene un _id registrado
            expect(_body.payload).to.be.ok;
        });

        it('Debe loguear correctamente al usuario y DEVOLVER UNA COOKIE', async function() {
            //Logueamos al usuario recién registrado
            const credentials = {
                email: this.mockUser.email,
                password: this.mockUser.password
            }
            //Obtendremos de supertest los headers de la respuesta y extraeremos el "set-cookie"
            //Si este atributo existe, quiere decir que el endpoint devuelve una cookie
            //Guardaremos la cookie en nuestra variable global declarada al inicio del describe()
            const result = await requester.post('/api/sessions/login').send(credentials);
            //console.log(result.headers['set-cookie']);
            const cookieResult = result.headers['set-cookie'][0];
            
            expect(cookieResult).to.be.ok;

            const splitCookieResult = cookieResult.split('=');
            cookie = {
                name: splitCookieResult[0],
                value: splitCookieResult[1]
            }

            expect(cookie.name).to.be.ok.and.eql('coderCookie');
            expect(cookie.value).to.be.ok;
        });

        
        it('Debe enviar la cookie que contiene el usuario y destructurarlo correctamente', async function() {
           
            //Enviamos la cookie que guardamos arriba a partir de un set
            const { _body } = await requester.get('/api/sessions/current').set('Cookie', [`${cookie.name}=${cookie.value}`]);

            //Luego, el método current debería devolver el correo del usuario que se guardó desde el Login
            //Indicando que efectivamente se guardó una cookie con el valor del usuario (email).
            expect(_body.payload.email).to.be.eql(this.mockUser.email);
        });
    });

    describe('Test uploads', () => {

        it('Debe poder crearse una mascota con la ruta de la imagen', async () => {

            const mockPet = {
                name: 'Orejitas',
                specie: 'Perro',
                birthDate: '10-11-2022'
            }
            
            const result = await requester.post('/api/pets/withimage')
            .field('name', mockPet.name)
            .field('specie', mockPet.specie)
            .field('birthDate', mockPet.birthDate)
            .attach('image', './test/files/coderDog.jpg');

            //Corroboramos que la petición haya resultado en OK
            expect(result.status).to.be.eql(200);

            //Corroboramos que el payload tenga un _id, indicando que se guardó en la BD
            expect(result._body.payload).to.have.property('_id');

            //Finalmente, corroboramos que la mascota guardada también tenga el campo image definido.
            expect(result._body.payload.image).to.be.ok;
        })
    })
})