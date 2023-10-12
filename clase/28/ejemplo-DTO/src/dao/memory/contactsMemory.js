export default class Contacts {
    constructor () {
        this.data = [
            {
                "_id": "1",
                "first_name": "Joaco",
                "last_name": "Cejas",
                "phone": 23234234
            },
            {
                "_id": "2",
                "first_name": "Ignacio",
                "last_name": "Iglesias",
                "phone": 7857585
            }
        ]
    }

    get = async() => {
        return this.data;
    }
}