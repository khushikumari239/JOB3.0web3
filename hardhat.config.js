require("@nomicfoundation/hardhat-ethers");
require("dotenv").config();


module.exports = {
  solidity: "0.8.18",
  contractsDir: "./contracts",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};