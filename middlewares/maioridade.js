const maiorIdadeMiddleware = (req, res, next) => {
  try {
    const { idade } = req.body;
    if (idade >= 18) {
      next();
    } else {
      res.status(403).json({ message: 'Acesso negado. Você precisa ser maior de idade.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};

module.exports = maiorIdadeMiddleware;