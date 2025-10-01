const SerServiceRestController = require("./SerServiceRestController");

module.exports = (name, routeName, req, res) => {
  const restController = new SerServiceRestController(
    name,
    routeName,
    req,
    res,
  );
  return restController;
};
