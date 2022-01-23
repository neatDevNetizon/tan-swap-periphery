const WETH9 = "0xf77e9491C09819e0b457E484965F4f0B8c5c30e1";
const TANFactory = "0xc55A204Cc3c5c366852e2668c3c4a94C8c4A131B";
const TANRouter = artifacts.require("TANRouter01");

module.exports = function (deployer) {
  deployer.deploy(TANRouter, WETH9, TANFactory);
};
