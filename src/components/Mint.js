import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useSelector, useDispatch } from 'react-redux';

const Mint = () => {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");

  const onMintPressed = async () => { //TODO: implement
    console.log('On Mint Pressed!')
  };
  
  const state = useSelector((state) => (state));


  useEffect(() => {
    if (state.user.user === '') {
      console.log('No User!')
    } else {
      console.log('State: ', state.user.user);
      setWallet(state.user.user);
    }
  })

  //The UI of our Minter Component
    return (
      <div>
        <Navbar/>
        <div className="Minter">
          <br></br>
          <h1 id="title">🧙‍♂️ Alchemy NFT Minter</h1>
          <p>
            Simply add your asset's link, name, and description, then press "Mint."
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
    );
}

export default Mint;