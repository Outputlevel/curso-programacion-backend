import mongoose from "mongoose";

const contactCollection = "contacts";

const contactSchema = mongoose.Schema({
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
});

const contactModel = mongoose.model(contactCollection, contactSchema);

export default contactModel;