import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import { mintNFT } from '../utils/interact';

const Mint = () => {

  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");

  const state = useSelector((state) => state);

  useEffect(() => {
    if (state.user.user !== '') {
      setWallet(state.user.user);
    }
  })

  const onMintPressed = async () => {
    console.log('Mint Pressed!')
    const { status } = await mintNFT(url, name, description)
    setStatus(status)
  }

  return (
    <div>
        <Navbar/>
        <div className="Minter">

          <br></br>
          <h1 id="title">🧙‍♂️ DeCentral Hub NFT Minter</h1>
          <p>
            Simply add your asset's link, name, and description, then press the "Mint NFT" button. 
          </p>
          <form>
            <h2>🖼 Link to asset: </h2>
            <input
              type="text"
              placeholder="e.g. https://gateway.pinata.cloud/ipfs/<hash>"
              onChange={(event) => setURL(event.target.value)}
            />
            <h2>🤔 Name: </h2>
            <input
              type="text"
              placeholder="e.g. My first NFT!"
              onChange={(event) => setName(event.target.value)}
            />
            <h2>✍️ Description: </h2>
            <input
              type="text"
              placeholder="e.g. Even cooler than cryptokitties ;)"
              onChange={(event) => setDescription(event.target.value)}
            />
          </form>
          <button id="mintButton" onClick={onMintPressed}>
            Mint NFT
          </button>
          <p id="status">
            {status}
          </p>
        </div>
    </div>
  )
}

export default Mint;