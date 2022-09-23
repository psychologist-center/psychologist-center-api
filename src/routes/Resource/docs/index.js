const remove = require("./remove");
const create = require("./create");
const update = require("./update");
const list = require("./list");

module.exports = {
    ...list,
    ...create,
    "/resource/{id}": {
        ...update["/resource/{id}"],
        ...remove["/resource/{id}"],
    },
};
