const user = require('../controllers/userControllers');
const userRouter = require('express').Router();

userRouter.get('/', user.get);
userRouter.post('/', user.post);
// userRouter.delete('/', user.deleteByID);
userRouter.delete('/', user.deleteEmail);
userRouter.put('/', user.edit);

module.exports = userRouter;
