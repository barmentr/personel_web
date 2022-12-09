import * as pageController from "../controllers/pageController.js"



const routesConfig = function (app) {
    app.get('/',[pageController.getIndexPage]);
    app.get('/about',[pageController.getAboutPage])

}

export default routesConfig;

