const Migrations = artifacts.require("CarbonZero.sol");

export default async function (deployer, network, address) {
  deployer.deploy(CarbonZero);
};
