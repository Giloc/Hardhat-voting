require("@nomicfoundation/hardhat-toolbox");
const ALCHEMY_API_KEY = "_dv3yPErSM1BerJywzIAYSqoGtf_2yiD";

const SEPOLIA_PRIVATE_KEY = "8553193bab33be575effdc0a1a238940d6680b5fdf3031247be156c2e0af1bdb";
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};
