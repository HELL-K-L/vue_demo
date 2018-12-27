const Mock = require("./mock/index.js");

module.exports = {
  devServer: {
    port: 8080,
    before(app) {
      app.get(/^\/API[\s\S]*/, (req, res) => {
        res.json(Mock.MockGet(req));
      });
      app.post(/^\/API[\s\S]*/, (req, res) => {
        res.json(Mock.MockPost(req, res));
      });
    }
  }
};
