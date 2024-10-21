const orderDao = require("../DAO/order.dao");

const getOrders = async (req, res) => {
  // TODO: criar regra que busca 
  //as ordem no banco e suas validacoes
  res.send({ status: "success", result: "getOrders" });
};

const getOrderById = async (req, res) => {
  res.send({ status: "success", result: "getOrderById" });
};

const createOrder = async (req, res) => {
  const order = req.body;

  const orderCreated = orderDao.createOrder(order)
  res.send({ status: "success", result: orderCreated });
};

const resolveOrder = async (req, res) => {

  // buscar a ordem
  // validar que a ordem ainda nao foi finalizada
  // finalizar a ordem
    // fazer o update no banco 
    //mudando o status de pending para finished

  // TODO: 
  res.send({ status: "success", result: "resolveOrder" });
};

module.exports = {
  getOrders,
  getOrderById,
  createOrder,
  resolveOrder,
};
