import { ethers } from "hardhat";

async function main() {

  const BlackadamToken = await ethers.deployContract("BlackadamToken");

  await BlackadamToken.waitForDeployment();

  console.log( `BlackadamToken deployed to ${BlackadamToken.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
