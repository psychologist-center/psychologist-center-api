const remove = require("./remove");
const create = require("./create");
const update = require("./update");
const list = require("./list");

module.exports = { ...list, ...create, ...update, ...remove };
