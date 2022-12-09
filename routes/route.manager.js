import routePage from "./routes.page.js";
import routeProject from "./routes.project.js";




const routesConfig = function (app) {
    
    
    routePage(app);
    routeProject(app);
   
    app.use((req, res, next) => { res.status(404).send("NOT  as FOUND"); });
};

export default routesConfig;