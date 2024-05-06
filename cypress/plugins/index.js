const cypressAutorecord = require('cypress-autorecord/plugin');

module.exports = (on, config) => {
  cypressAutorecord(on, config);
  return config;
};