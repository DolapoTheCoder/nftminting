import React, {useState, useEffect} from 'react';
import { BrowserRoute as Router, Swtich, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './compCSS/Navbar.css';

const Navbar = () => {

    const [connected, toggledConnect] = useState(false);
    const location = useLocation();
    const [currentAddress, updateAddress] = useState('0x');

    return (
        <div>
            <nav className='navbar'>
                <ul className='navbar.ul'>
                    <li className='navbar.li'>
                        <Link to="/">
                            <div className=''>
                                NFT Mint
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar