const { ObjectId } = require("mongodb");
const Resource = require("./Resource");

exports.create = async (resourceInfo) => {
    await Resource.create(resourceInfo);
};

exports.find = async (filter, pageSize, page, projection) => {
    return await Resource.find(filter, projection)
        .sort({ active: -1 })
        .skip(page > 0 ? (page - 1) * pageSize : 0)
        .limit(pageSize);
};

exports.update = async (where, resourceInfo) => {
    return await Resource.findOneAndUpdate(
        { ...where, _id: ObjectId(where._id) },
        resourceInfo
    );
};
