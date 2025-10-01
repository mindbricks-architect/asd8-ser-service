const SerServiceGrpcController = require("./SerServiceGrpcController");

module.exports = (name, routeName, call, callback) => {
  const grpcController = new SerServiceGrpcController(
    name,
    routeName,
    call,
    callback,
  );
  return grpcController;
};
