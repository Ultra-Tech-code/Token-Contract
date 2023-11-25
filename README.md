# Project Title
BlackadamToken

## Description
 A basic ERC-20 token contract named BlackAdamToken, built on the ERC20 contract from OpenZeppelin library.
The contract inherits from the ERC-20 standard, providing functionalities for a standard fungible token.
Used in showcasing Error Handling in contract [revert, require, assert]

 * ERC-20 Details:
 * - Symbol: BNT
 * - Name: BlackadamToken
 * - Decimals: 18

## Getting Started
- Proficiency in [Hardhat](https://hardhat.org/): It is essential to have a good grasp of using Hardhat, a development environment designed for writing, testing, and deploying smart contracts. 
- Understanding of [Solidity](https://soliditylang.org/): It is important to have a strong understanding of Solidity as it is the main programming language used for creating smart contracts in this codebase.
- Command line proficiency: Basic familiarity with using command line tools such as the terminal or Command Prompt is necessary for running commands and scripts.

### Installing
- A text editor: For running the code [Visual Studio Code](https://code.visualstudio.com/).
- You will need to have [Node.js](https://nodejs.org/en) installed on your system, with version V10. or higher.
- Node Package Manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) used for installing and managing dependencies.
* run this command in your terminal `git clone https://github.com/Ultra-Tech-code/Token-Contract.git` to clone this repository

### Executing program

After cloning the github, you will want to do the following to get the code running on your computer.
 1. cd to the project directory, in the terminal type: `npm i`
 2. In the terminal type: `npx hardhat node`
 3. Open a second terminal
 4. In the second terminal, type: `npx hardhat run --network localhost scripts/deploy.ts` to deploy the token.
 5. You can also run the test.ts file, type `npx hardhat run --network localhost scripts/test.ts` to see the how each function works 

## Help

Any advise for common problems or issues.
[hardhat tutorial](https://hardhat.org/tutorial)


## Authors
  [@0xblackadam](https://twitter.com/i_hizick)

## License

This project is licensed under the [0xblackadam] License.