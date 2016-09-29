var config = {};

config.path = "/PATH/TO/ml-combintation-query/"; // include trailing "/"

config.host = "localhost";

config.database = {
  "name": "ml-combintation-query",
  "port": 8579
};

config.auth = {
  user: 'USERNAME',
  pass: 'PASSWORD',
  sendImmediately: false
};

config.databaseSetup = {
  "database-name": config.database.name
};

config.forestSetup = {
  "forest-name": config.database.name + '-1',
  "database": config.database.name
}

config.restSetup = {
  "rest-api": {
    "name": config.database.name + "-rest",
    "database": config.database.name,
    "modules-database": config.database.name + "-modules",
    "port": config.database.port,
    "error-format": "json"
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = config;
}
