const { ethers } = require("hardhat");
const hre = require("hardhat");
const fs = require("fs");

async function main() {
  //get the signer that we will use to deploy
  const [deployer] = await ethers.getSigners();
  
  //Get the NFTMarketplace smart contract object and deploy it
  const NFTMint = await ethers.getContractFactory("NFTMint");
  const nftmint = await NFTMint.deploy();

  await nftmint.deployed();
  
  //Pull the address and ABI out while you deploy, since that will be key in interacting with the smart contract later
  const data = {
    address: nftmint.address,
    abi: JSON.parse(nftmint.interface.format('json'))
  }

  //This writes the ABI and address to the nftmarketplace.json
  //This data is then used by frontend files to connect with the smart contract
  fs.writeFileSync('./src/NFTMint.json', JSON.stringify(data))

  console.log("Contract deplpoyed to addddress:", data.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });