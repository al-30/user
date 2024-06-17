const userRouter = require('./user.routes');

const AppRoutes = (app) => {
  app.use('/', userRouter);
};
module.exports = AppRoutes;
