module.exports = {
  createSession: () => {
    const SessionManager = require("./asd-session");
    return new SessionManager();
  },
};
