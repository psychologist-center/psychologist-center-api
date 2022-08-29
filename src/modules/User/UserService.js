const { ObjectId } = require('mongodb');
const User = require('../User/User');

exports.checkUserIsValid = async (userId, projection) => {
    let userExists = await User.findById(ObjectId(userId), projection);

    if (!userExists) {
        throw new Error("Usuário não encontrado");
    } else {
        return userExists
    }
}