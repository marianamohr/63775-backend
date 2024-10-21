const { persistence } = require("../config/config");
// oracle, mysql, cassandra, mariadb, mongo, local, files
const userDaoMongo = require("../dao/users.mongo");
const userDaoLocal = require("../dao/users.local");

let dto;

switch (persistence) {
  case "mongo":
    dto = userDaoMongo;
    break;
  case "memory":
    dto = userDaoLocal;
    break;
}

module.exports = dto;
