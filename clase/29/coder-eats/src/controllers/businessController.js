import Business from '../dao/classes/businessDAO.js';

const businessService = new Business();

const responseError = {
    status: 'error',
    error: 'Something went wrong, try again later'
};

export const getBussiness = async (req, res) => {
    const result = await businessService.getBusiness();
    
    if (!result) return res.status(500).send(responseError);
    res.send({status: 'success', result});
}

export const getBussinessById = async (req, res) => {
    const { bid } = req.params;
    const result = await businessService.getBusinessById(bid);

    if (!result) return res.status(500).send(responseError);
    res.send({status: 'success', result});
}

export const createBusiness = async (req, res) => {
    const business = req.body; //Tarea: validar los campos
    const result = await businessService.saveBusiness(business);

    if (!result) return res.status(500).send(responseError);
    res.send({status: 'success', result});
}

export const addProduct = async (req, res) => {
    const product = req.body; //Tarea: validar los campos
    const business = await businessService.getBusinessById(req.params.bid);

    if (!business) return res.status(500).send(responseError);
    business.products.push(product);
    const result = await businessService.updateBusiness(business._id, business);

    if (!result) return res.status(500).send(responseError);
    res.send({status: 'success', result: 'Business Updated!'});
}