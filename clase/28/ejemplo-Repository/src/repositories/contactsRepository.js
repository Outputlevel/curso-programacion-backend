import ContactDTO from "../dao/DTOs/contactDTO.js";

export default class ContactRepository {
    constructor (dao) {
        this.dao = dao;
    }

    async getContacts() {
        return await this.dao.get();
    }

    async createContact(contact) {
        const newContact = new ContactDTO(contact);
        return await this.dao.insert(newContact);
    }
}