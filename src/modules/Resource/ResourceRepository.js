const { ObjectId } = require("mongodb");
const Resource = require("./Resource");

exports.create = async (resourceInfo) => {
    await Resource.create(resourceInfo);
};

exports.find = async (filter, pageSize, page, projection) => {
    const skip = !page || page <= 1 ? 0 : !pageSize ? page : page * pageSize;
    const limit = pageSize ? pageSize : 0;
    return await Resource.find(filter, projection)
        .sort({ create_date: "asc" })
        .skip(skip)
        .limit(limit);
};

exports.update = async (where, resourceInfo) => {
    return await Resource.findOneAndUpdate(
        { ...where, _id: ObjectId(where._id) },
        resourceInfo
    );
};

exports.delete = async (where) => {
    return await Resource.findOneAndDelete({
        ...where,
        _id: ObjectId(where._id),
    });
};
