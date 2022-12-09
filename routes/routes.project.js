import * as projectController from "../controllers/projectController.js"



const routesConfig = function (app) {
    app.post('/projects',[projectController.createProject]);


}

export default routesConfig;

