import * as pageController from "../controllers/pageController.js"



const routesConfig = function (app) {
    app.get('/',[pageController.getIndexPage]);
    app.get('/about',[pageController.getAboutPage]);
    app.get('/blog',[pageController.getBlogPage]);
    app.get('/work',[pageController.getWorkPage]);
    app.get('/contact',[pageController.getContactPage]);
   

}

export default routesConfig;

