const Resource = require('./Resource');

exports.create = async (resourceInfo) => {
    await Resource.create(resourceInfo);
};
