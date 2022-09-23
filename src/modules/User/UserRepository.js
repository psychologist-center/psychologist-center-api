const { ObjectId } = require('mongodb');
const User = require('./User');

exports.create = async (userInfo) => {
    const userAlreadyExists = await User.findOne({ email: userInfo.email });

    if (!userAlreadyExists) {
        await User.create(userInfo);
    } else {
        throw new Error("Usuário já cadastrado");
    }
};

exports.findOne = async (userInfo, projection) => {
    const userExists = await User.findOne(userInfo, projection);

    if (!userExists) {
        throw new Error("Usuário não encontrado");
    } else {
        return userExists
    }
}

exports.find = async (filter, pageSize, page, projection) => {
    const skip = !page || page <= 1 ? 0 : !pageSize ? page : page * pageSize;
    const limit = pageSize ? pageSize : 0;
    return await User.find(filter, projection)
        .sort({ name: "asc" })
        .skip(skip)
        .limit(limit);
}

exports.update = async (email, userInfo) => {
    return await User.findOneAndUpdate({ email }, userInfo);
}

exports.delete = async (email) => {
    return await User.findOneAndDelete({ email });
}
