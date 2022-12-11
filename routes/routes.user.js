import * as userController from '../controllers/usercontroller.js';
//const ValidationMiddleware = require('../common/middlewares/auth.validation.middleware');



const routesConfig = function (app) {

    app.get('/users', [userController.getLoginPage]);

    app.post('/users/login', [userController.login]);
    app.post('/users/register', [userController.createUser]);





};


export default routesConfig;

