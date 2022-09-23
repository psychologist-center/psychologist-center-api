const { ObjectId } = require("mongodb");
const Session = require("./Session");

exports.create = async (sessionInfo) => {
    await Session.create(sessionInfo);
};

exports.find = async (filter, pageSize, page, projection) => {
    const skip = !page || page <= 1 ? 0 : !pageSize ? page : page * pageSize;
    const limit = pageSize ? pageSize : 0;
    return await Session.find(filter, projection)
        .sort({ appointment_date: "asc" })
        .skip(skip)
        .limit(limit);
};

exports.update = async (sessionId, sessionInfo) => {
    return await Session.findByIdAndUpdate(
        { _id: ObjectId(sessionId) },
        sessionInfo
    );
};

exports.delete = async (where) => {
    return await Session.findOneAndDelete({
        ...where,
        _id: ObjectId(where._id),
    });
};
