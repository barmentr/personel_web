import Project from "../models/projectModel.js";

const createProject = async (req, res) => {

    const project = await Project.create(req.body);

    res.status(201).json({
        succeded: true,
        project,
    });


}
export { createProject, }
