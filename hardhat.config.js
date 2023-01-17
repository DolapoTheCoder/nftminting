require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
const api = process.env.REACT_APP_API_URL;
const key = process.env.REACT_APP_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: api,
      accounts: [`0x${key}`]
    }
  },
};
