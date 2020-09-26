const db = require("../../data/config");

function addTask(task) {
    return db("tasks").insert(task);
}

function getTasks() {
    return db("tasks as t")
        .join("projects as p", "p.id", "t.project_id")
        .select(
            "p.name as Project Name",
            "p.description as Project Description",
            "t.description as Task Descriptions",
            "t.notes as Task Notes",
            "t.completed"
        );
}



module.exports = {
    addTask,
    getTasks,
};