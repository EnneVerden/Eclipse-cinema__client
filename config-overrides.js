const rewireAliases = require("react-app-rewire-aliases");
const { paths } = require("react-app-rewired");
const path = require("path");

module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    "@": path.resolve(__dirname, "./src"),
    components: path.resolve(__dirname, "./src/components"),
    constants: path.resolve(__dirname, "./src/constants"),
    reducers: path.resolve(__dirname, "./src/reducers"),
    actions: path.resolve(__dirname, "./src/actions"),
    theme: path.resolve(__dirname, "./src/theme"),
    selectors: path.resolve(__dirname, "./src/selectors"),
    hooks: path.resolve(__dirname, "./src/hooks"),
    types: path.resolve(__dirname, "./src/types"),
    utils: path.resolve(__dirname, "./src/utils"),
  })(config, env);

  return config;
};
