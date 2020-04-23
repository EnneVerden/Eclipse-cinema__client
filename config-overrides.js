const rewireAliases = require("react-app-rewire-aliases");
const { paths } = require("react-app-rewired");
const path = require("path");

module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    "@": path.resolve(__dirname, "./src"),
    "@components": path.resolve(__dirname, "./src/components"),
    "@constants": path.resolve(__dirname, "./src/constants"),
    "@reducers": path.resolve(__dirname, "./src/reducers"),
    "@theme": path.resolve(__dirname, "./src/theme"),
    "@tsTypes": path.resolve(__dirname, "./src/tsTypes"),
    "@utils": path.resolve(__dirname, "./src/utils"),
  })(config, env);

  return config;
};
