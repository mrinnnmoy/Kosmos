const hre = require("hardhat");

async function main() {
  const Kosmos = await hre.ethers.getContractFactory("Kosmos");
  const kosmos = await Kosmos.deploy();

  await kosmos.deployed();

  console.log("Contract Deployed at:", kosmos.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});