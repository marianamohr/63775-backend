
const users = [
  {
    "first_name": "Mariana",
    "last_name": "Mohr",
    "email": "marianamohr@gmail.com",
    "password": "$2b$10$RL3BZd5SOKAY1nHZ3G8x4.HNieau2sDtC1E6hmIrOT4t.bWYWHzm.",
    "role": "admin"
  },
  {
    "first_name": "Julia",
    "last_name": "Prado",
    "email": "julia@gmail.com",
    "password": "123456",

  }
];

const get = () => {
  return users;
};

const getByEmail = (email) => {
  return users.find((user) => user.email === email);
};

const create = (user) => {
  users.push(user)
  return user
};

module.exports = { get , getByEmail, create};
