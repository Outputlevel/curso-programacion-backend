import contactModel from "./models/contactModel.js";

export default class Contacts {
    get = async() => {
        const contacts = await contactModel.find();
        return contacts;
    }
}