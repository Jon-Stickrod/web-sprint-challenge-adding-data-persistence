const express = require('express');
const projectRouter = require('./routers/projects/project-router');
const resourcesRouter = require('./routers/resources/resources-router');
const tasksRouter = require('./routers/tasks/task-router');

const server = express();
const port = process.env.PORT || 4000; 

server.use(express.json());
 server.use("/resources", resourcesRouter);
 server.use("/projects", projectRouter);
 server.use("/tasks", tasksRouter);

server.use((err, req, res, next) =>{
    console.log(err);
    res.status(500).json({ message: "something went wrong",});
});

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`);
});