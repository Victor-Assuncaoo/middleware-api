const logsMiddleware = (req, res, next) => {
  console.log({
     method: req.method,
    url: req.url,
    date: new Date().toISOString(),
    ip: req.ip
  });
  next();
};


module.exports = logsMiddleware;