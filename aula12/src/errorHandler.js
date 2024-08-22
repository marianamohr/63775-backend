const errorHandler = (err, req, res, next) => {
  {
    //console.error(err.stack); // Log do erro no console

    // Definir o status HTTP e a mensagem de erro
    res.status(err.status || 500);
    res.json({
      error: {
        message: err.message,
        status: err.status || 500,
      },
    });
  }
};

module.exports = errorHandler;
