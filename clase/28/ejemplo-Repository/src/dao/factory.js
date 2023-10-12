import mongoose from "mongoose";

import config from "../config/config.js";

let Contacts;

switch (config.persistence) {
    default:
    case "MONGO":
        const connection = mongoose.connect('mongodb://127.0.0.1:27017/class-28');
        const { default: ContactsMongo } = await import('./mongo/contactsMongo.js');
        Contacts = ContactsMongo;
        break;
    case "MEMORY":
            const { default: ContactsMemory} = await import('./memory/contactsMemory.js');
            Contacts = ContactsMemory;
        break;
}

export default Contacts;