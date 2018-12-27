var Mock = require("mockjs");

var Random = Mock.Random;

function MockGet() {
  return {
    name: Random.cname(),
    intro: Random.word(20)
  };
}

function MockPost() {
  return {
    name: Random.cname(),
    intro: Random.word(10)
  };
}

module.exports = {
  MockGet,
  MockPost
};
