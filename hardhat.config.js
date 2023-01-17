require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
const { REACT_APP_API_URL, REACT_APP_PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: REACT_APP_API_URL,
      accounts: [`0x${REACT_APP_PRIVATE_KEY}`]
    }
  },
};
