const { inject } = require("mindbricks-api-face");

module.exports = (app) => {
  const authUrl = (process.env.SERVICE_URL ?? "mindbricks.com").replace(
    process.env.SERVICE_SHORT_NAME,
    "auth",
  );
  const basePath =
    process.env.SERVICE_URL_SUFFIX ?? `/${process.env.SERVICE_SHORT_NAME}-api`;
  const config = {
    basePath: basePath,
    name: "asd - ser",
    brand: {
      name: "asd",
      image: "https://mindbricks.com/favicon.ico",
      moduleName: "ser",
      version: process.env.SERVICE_VERSION || "1.0.0",
    },
    auth: {
      url: authUrl,
      loginPath: "/login",
      logoutPath: "/logout",
      currentUserPath: "/currentuser",
      authStrategy: "external",
      initialAuth: true,
    },
    dataObjects: [],
  };

  inject(app, config);
};
