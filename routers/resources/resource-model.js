const db = require("../../data/config");

function addResource(resource) {
    return db("resources").insert(resource);
}

function getResources() {
    return db("resources").select("*");
}



module.exports = {
    addResource,
    getResources,
};