const { ObjectId } = require('mongodb');
const Session = require('./Session');

exports.create = async (sessionInfo) => {
    await Session.create(sessionInfo);
};

exports.find = async (filter, pageSize, page, projection) => {
    return await Session.find(filter, projection)
        .sort({ active: -1 })
        .skip(page > 0 ? ((page - 1) * pageSize) : 0)
        .limit(pageSize)
}

exports.update = async (sessionId, sessionInfo) => {
    return await Session.findByIdAndUpdate({ _id: ObjectId(sessionId) }, sessionInfo);
}