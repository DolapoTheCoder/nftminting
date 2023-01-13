import React from 'react';
import {Link} from "react-router-dom";
import './compCSS/Navbar.css';



const NavBar = () => {

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
            <button className='button'>
                Connect Wallet
            </button>
        </div>
        </h1>
    );
};
export default NavBar;