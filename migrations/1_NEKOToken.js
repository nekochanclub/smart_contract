const NEKO = artifacts.require("NEKOToken");

module.exports = function (deployer) {
  deployer.deploy(NEKO);
};
