const SerServiceMcpController = require("./SerServiceMcpController");

module.exports = (name, routeName, params) => {
  const mcpController = new SerServiceMcpController(name, routeName, params);
  return mcpController;
};
