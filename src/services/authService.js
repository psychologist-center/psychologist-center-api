const jwt = require('jsonwebtoken');
const UserService = require('../modules/User/UserService');
const UserRepository = require('../modules/User/UserRepository');

exports.generateToken = async (data) => {
    return jwt.sign(data.toJSON(), process.env.SALT_KEY , { expiresIn: '1d' });
}

exports.decodeToken = async (token) => {
    return jwt.verify(token, process.env.SALT_KEY );
}

exports.checkToken = async (req, res, next) => {
    var [authType, token] = req.headers.authorization.split(' ');

    if (!token) return res.status(401).json({ message: 'Token Inválido' });

    try {
        const decoded = jwt.verify(token, process.env.SALT_KEY );
        await UserService.checkUserIsValid(decoded._id);

        req.body.current_user = decoded._id;
        next();
    } catch (e) {
        res.status(401).json({ message: 'Token Inválido' });
    }
};

exports.CheckOwn = async (req, res, next) => {
    var [authType, token] = req.headers.authorization.split(' ');
    var { id } = req.params;

    if (!token) return res.status(401).json({ message: 'Token Inválido' });

    try {
        const decoded = jwt.verify(token, process.env.SALT_KEY );
        const userExists = await UserService.checkUserIsValid(decoded._id);

        if (userExists.user_type === 'admin' || userExists.user_type === 'professional' || decoded._id == id) {
            
            req.body.current_user = decoded._id;
            next();
        } else {
            res.status(403).json({
                message: 'Acesso restrito'
            });
        }
    } catch (e) {
        res.status(401).json({ message: 'Token Inválido' });
    }
};

exports.checkProfessional = async (req, res, next) => {
    var [authType, token] = req.headers.authorization.split(' ');

    if (!token) return res.status(401).json({ message: 'Token Inválido' });

    try {
        const decoded = jwt.verify(token, process.env.SALT_KEY );
        const userExists = await UserService.checkUserIsValid(decoded._id);

        if (userExists.user_type === 'professional' || userExists.user_type === 'admin') {
            
            req.body.current_user = decoded._id;
            next();
        } else {
            res.status(403).json({
                message: 'Acesso restrito'
            });
        }
    } catch (e) {
        res.status(401).json({ message: 'Token Inválido' });
    }
}