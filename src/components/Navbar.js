import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import './compCSS/Navbar.css';
import { ethers } from 'ethers';



const NavBar = () => {

    const [errorMessage, setErrorMessage] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", accountsChanged);
      window.ethereum.on("chainChanged", chainChanged);
    }
  }, []);

  const connectHandler = async () => {
    if (window.ethereum) {
      try {
        const res = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        await accountsChanged(res[0]);
      } catch (err) {
        console.error(err);
        setErrorMessage("There was a problem connecting to MetaMask");
      }
    } else {
      setErrorMessage("Install MetaMask");
    }
  };

  const accountsChanged = async (newAccount) => {
    setAccount(newAccount);
    try {
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [newAccount.toString(), "latest"],
      });
      setBalance(ethers.utils.formatEther(balance));
    } catch (err) {
      console.error(err);
      setErrorMessage("There was a problem connecting to MetaMask");
    }
  };

  const chainChanged = () => {
    setErrorMessage(null);
    setAccount(null);
    setBalance(null);
  };


    return (
        <h1 className='title'>NFT MINT
        <div className="navbar">
            <div className="nft-mint">
                <Link to="/">NFT Mint</Link>
            </div>

            <div className="profile">
                <Link to="/profile">Profile</Link>
            </div>

            <div className='mint'>
                <Link to="/mint">Mint</Link>
            </div>

            <div>
                account: {account}
            </div>

            <button className='button' onClick={connectHandler}>
                Connect Wallet
            </button>
        </div>
        </h1>
    );
};
export default NavBar;