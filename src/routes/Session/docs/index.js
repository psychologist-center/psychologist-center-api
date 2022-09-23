const remove = require("./remove");
const create = require("./create");
const update = require("./update");
const list = require("./list");

module.exports = {
    ...list,
    ...create,
    "/session/{id}": { ...update["/session/{id}"], ...remove["/session/{id}"] },
};
