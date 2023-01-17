import { useSelector } from 'react-redux';
import { pinJSONToIPFS } from './pinata';

require("dotenv").config()
const alchemyKey = process.env.REACT_APP_API_URL
const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(alchemyKey)

const contractAbi = require("../NFTMint.json")
const contractAddress = "0xC3e517AD08d5afb5007715B445b457881d5A8db8"

//need to import address

export const mintNFT = async (url, name, description) => {
    if (url.trim() == "" || name.trim() == "" || description.trim() == "") {
        return {
            success: false,
            status: "! Pleae make sure all the fields are completed before minting.",
        }
    }

    //make metadata
    const metadata = new Object()
    metadata.name = name
    metadata.image = url
    metadata.description = description

    //make pinata call
    const pinataResponse = await pinJSONToIPFS(metadata)
    if (!pinataResponse.success) {
        return {
        success: false,
        status: "😢 Something went wrong while uploading your tokenURI.",
        }
    }
    const tokenURI = pinataResponse.pinataUrl
    window.contract = await new web3.eth.Contract(contractAbi, contractAddress)

    const transactionParameters = {
        to: contractAddress, // Required except during contract publications.
        from: window.ethereum.selectedAddress, // must match user's active address.
        data: window.contract.methods
          .mintNFT(window.ethereum.selectedAddress, tokenURI)
          .encodeABI(), //make call to NFT smart contract
    }
      
      //sign the transaction via MetaMask
    try {
        const txHash = await window.ethereum.request({
            method: "eth_sendTransaction",
            params: [transactionParameters],
        })
        return {
            success: true,
            status: "✅ Check out your transaction on Etherscan: https://goerli.etherscan.io/tx/" +
            txHash,
        }
      } catch (error) {
        return {
          success: false,
          status: "😥 Something went wrong: " + error.message,
        }
    }
}
