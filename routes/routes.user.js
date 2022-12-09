const UsersController = require('../controllers/user.controller');
//const ValidationMiddleware = require('../common/middlewares/auth.validation.middleware');




exports.routesConfig = function (app) {
    app.post('/users', [
        // ValidationMiddleware.validJWTNeeded,
        // ValidationMiddleware.validToken,
        UsersController.insert
    ]);
  

    app.get('/users', [
       // ValidationMiddleware.validJWTNeeded,
       // ValidationMiddleware.validToken,  
      UsersController.list
    ]);

    app.get('/users/getuserbymail/:userMail',[
        //ValidationMiddleware.validJWTNeeded,
        UsersController.getByEmail
        ]);
    app.get('/users/:userId', [
        //ValidationMiddleware.validJWTNeeded,       
        UsersController.getById
    ]);
    
    app.patch('/users/:userId', [
        //ValidationMiddleware.validJWTNeeded,        
        UsersController.patchById
    ]);
    app.delete('/users/:userId', [
        //ValidationMiddleware.validJWTNeeded,        
        UsersController.removeById
    ]);
};