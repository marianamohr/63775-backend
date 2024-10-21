const userModel = require("../models/user.model");

const getUsers = async () => {
  let users = await userModel.find();
  users = users.map((u) => {
    u.toJSON();
 
    return u;
  });
  return users;
};

const getUserById = async (id) => {
  const user = await userModel.findById(id);

  return user;
};

const createUser = async (user) => {
  const userCreated = await userModel.create(user);
  return userCreated;
};

module.exports = { getUsers, createUser, getUserById };
