const { ObjectId } = require("mongodb");
const ResourceRepository = require("./ResourceRepository");

const isResourceExists = async (resourceIds, userId) => {
    const filter = {
        _id: { $in: resourceIds.map((id) => ObjectId(id)) },
        user_id: userId,
    };
    const resources = await ResourceRepository.find(filter);
    return !!resources?.length;
};

module.exports = { isResourceExists };
