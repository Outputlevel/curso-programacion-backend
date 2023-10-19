import businessModel from '../models/businessModel.js';

export default class Business {
    getBusiness = async () => {
        try {
            return await businessModel.find();
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    getBusinessById = async (id) => {
        try {
            return await businessModel.findOne({_id: id});
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    saveBusiness = async (business) => {
        try {
            return await businessModel.create(business);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    updateBusiness = async (id, business) => {
        try {
            return await businessModel.updateOne({_id: id}, {$set: business});
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}