const auth = function (req, res, next) {
    const {username, password} = req.query;
    if (username !== 'Joaco' || password !== 'Coder2023') {
        return res.send('login failed');
    }

    req.session.user = username;
    req.session.admin = true;
    return next();
}

export default auth;