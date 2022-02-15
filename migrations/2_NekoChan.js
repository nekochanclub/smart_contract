const neko = artifacts.require("NekoChan");

module.exports = function (deployer) {
  deployer.deploy(neko);
};
