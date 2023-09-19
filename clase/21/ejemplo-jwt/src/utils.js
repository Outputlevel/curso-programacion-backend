import jwt from 'jsonwebtoken';

const PRIVATE_KEY = 'CodeKeySecret';

const generateToken = (user) => {
    const token = jwt.sign(
        {user},
        PRIVATE_KEY,
        {expiresIn: '24h'}
    );
    return token;
}

const authToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send({
            message: 'Not authenticated'
        });
    }
    const token = authHeader.split(' ')[1]; //Remove "Bearer"
    jwt.verify(token, PRIVATE_KEY, (error, credentiales) => {
        if (error) {
            return res.status(403).send({
                message: 'Not authenticated'
            });
        }
        req.user = credentiales.user;
        next();
    });
}

export {
    generateToken,
    authToken
}