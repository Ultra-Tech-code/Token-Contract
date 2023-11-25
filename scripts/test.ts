import { ethers } from "hardhat";

async function main() {

  const BlackadamToken = await ethers.deployContract("BlackadamToken");

  await BlackadamToken.waitForDeployment();

  console.log( `BlackadamToken deployed to ${BlackadamToken.target}`);


  //Interact with the contract
    const [deployer, user1, user2] = await ethers.getSigners();


    //get total supply of the token
    const totalSupply = await BlackadamToken.totalSupply();
    console.log("Total supply is", ethers.formatEther(totalSupply));

    // get name of the token
    const name = await BlackadamToken.name();
    console.log("Token name is", name);

    //get symbol of the token
    const symbol = await BlackadamToken.symbol();
    console.log("Token symbol is", symbol);

    // get decimals of the token
    const decimals = await BlackadamToken.decimals();
    console.log("Token decimals is", decimals);

    //mint tokens to user1
    const mint = await BlackadamToken.connect(deployer).mint(user1.address, ethers.parseEther("20"));
    await mint.wait();
    console.log("Minted 20 tokens to user1");

    //get balance of user1
    const balance = await BlackadamToken.balanceOf(user1.address);
    console.log("User1 balance is", ethers.formatEther(balance));

    //transfer tokens from user1 to user2
    const transfer = await BlackadamToken.connect(user1).transfer(user2.address, ethers.parseEther("10"));
    await transfer.wait();
    console.log("Transferred 10 tokens from user1 to user2");

    //get balance of user2
    const balance2 = await BlackadamToken.balanceOf(user2.address);
    console.log("User2 balance is", ethers.formatEther(balance2));

    //get balance of user1
    const balance3 = await BlackadamToken.balanceOf(user1.address);
    console.log("User1 balance is", ethers.formatEther(balance3));

    //burn the tokens
    const burn = await BlackadamToken.connect(user1).burn(ethers.parseEther("5"));
    await burn.wait();
    console.log("Burned 5 tokens from user1");

    //check balance after burn
    const balance4 = await BlackadamToken.balanceOf(user1.address);
    console.log("User1 balance is", ethers.formatEther(balance4));

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
