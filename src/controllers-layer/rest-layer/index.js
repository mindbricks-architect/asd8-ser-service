const mainRouters = require("./main");
const sessionRouter = require("./session-router");
module.exports = {
  ...mainRouters,
  SerServiceRestController: require("./SerServiceRestController"),
  ...sessionRouter,
};
