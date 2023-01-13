import React from 'react';
import {Link} from "react-router-dom";
import './compCSS/Navbar.css';



const NavBar = () => {

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
            <button className='button'>
                Connect Wallet
            </button>
        </div>
        </Link>
        </h1>
    );
};
export default NavBar;