import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import './compCSS/Navbar.css';
import { ethers } from 'ethers';
import { useSelector, useDispatch } from 'react-redux';
import { newUser } from '../reduxThings/actions/userActions';



const NavBar = () => {

  const [user, setUser] = useState('');
  const [balance, setBalance] = useState(0);

  const state = useSelector((state) => (state));
  const dispatch = useDispatch();

  const connectWallet = async () => {
    if(window.ethereum) {
      const accounts = await window.ethereum.request({method:"eth_requestAccounts"});
      setUser(accounts[0]);
      let balance = await window.ethereum.request({method: 'eth_getBalance', params: [accounts[0], 'latest']})
      balance = Math.round(ethers.utils.formatEther(balance) * 1e4) / 1e4;      
      setBalance(balance);
      dispatch(newUser(accounts));
    } else {
      window.alert("Please download MetaMask wallet.")
    }
  }

  useEffect(() => {
    if (state.user.user !== '') {
      setUser(state.user.user);
    }
  })


    return (
        <h1 className='title'>
        <Link to="/">NFT Mint
        <div className="navbar">

            <div className="profile">
                <Link to="/profile">Profile</Link>
            </div>

            <div className='mint'>
                <Link to="/mint">Mint</Link>
            </div>

            {user ? 
              <div>
                  account: {user}
              </div>
            : <></>}

            <button className='button' onClick={connectWallet}>
                Connect Wallet
            </button>
        </div>
        </Link>
        </h1>
    );
};
export default NavBar;