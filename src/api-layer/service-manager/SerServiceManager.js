const ApiManager = require("./ApiManager");

const { md5 } = require("common");

class SerServiceManager extends ApiManager {
  constructor(request, options) {
    super(request, options);
    this.serviceCodename = "asd8-ser-service";
    this.membershipCache = new Map();
  }

  parametersToJson(jsonObj) {
    super.parametersToJson(jsonObj);
  }
}

module.exports = SerServiceManager;
