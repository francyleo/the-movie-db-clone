const require_modules = require.context('.', false, /\.js$/);
const modules = {};

require_modules.keys().forEach(fileName => {
  if (fileName === './index.js') return;

  const module = require_modules(fileName);
  const module_name = fileName.replace(/(\.\/|\.js)/g, '');

  module.default.namespaced = true;
  modules[module_name] = module.default;
});

export default modules;
