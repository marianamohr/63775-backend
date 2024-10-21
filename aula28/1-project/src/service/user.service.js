//const userDao = require("../factory/factory");
//const userDao = require("../dao/users.local")
//const userDao = require("../dao/users.mongo")


const { userDTO } = require("../dto/users.dto");
class UserRepostory {
  constructor(dao) {
    this.dao = dao;
  }
  get = async () => {
    const users = await this.dao.get();
    const usersFormated = users.map((u) => {
      return userDTO(u);
    });
    return usersFormated;
  };

  getByEmail = async (email) => {
    const users = await this.dao.getByEmail(email);
    return users;
    // return userDTO(users);
  };

  create = async (user) => {
    const users = await this.dao.create(user);
    console.log("service", users);
    return users;
    //return userDTO(users);
  };
}

module.exports = UserRepostory

/*
const get = async () => {
  const users = await userDao.get();
  const usersFormated = users.map((u) => {
    return userDTO(u);
  });
  return usersFormated;
};

const getByEmail = async (email) => {
  const users = await userDao.getByEmail(email);
  return users;
  // return userDTO(users);
};

const create = async (user) => {
  const users = await userDao.create(user);
  console.log("service", users);
  return users;
  //return userDTO(users);
};

module.exports = { get, getByEmail, create };
*/
