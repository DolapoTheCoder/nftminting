import React from 'react';
import {Link} from "react-router-dom";
import './compCSS/Navbar.css';



const NavBar = () => {

    return (
        <div className="navbar">
            <div className="text">
                <Link to="/">NFT Mint</Link>
            </div>

            <div classame="profile">
                <Link to="/profile">Profile</Link>
            </div>

            <div className='text04'>
                <Link to="/mint">Mint</Link>
            </div>
        </div>
    );
};
export default NavBar;


// const Navbar = () => {

//     const [connected, toggledConnect] = useState(false);
//     const location = useLocation();
//     const [currentAddress, updateAddress] = useState('0x');

//     return (
//         <div>
//             <nav className='navbar'>
//                 <ul className='navbar.ul'>
//                     <li className='navbar.li'>
//                         <Link to="/">
//                             <div className=''>
//                                 Home
//                             </div>
//                         </Link>
//                     </li>
//                     <li>
//                         <ul>
//                             {location.pathname === "/mint" ?
//                                 <li>
//                                     <Link to="/mint">Mint NFT</Link>
//                                 </li>
//                                 :
//                                 <li>
//                                     <Link to="/mint">Mint NFT</Link>
//                                 </li>
//                             }
//                             {location.pathname === "/profile" ?
//                                 <li>
//                                     <Link to="/profile">Profile</Link>
//                                 </li>
//                                 :
//                                 <li>
//                                     <Link to="/profile">Profile</Link>
//                                 </li>
//                             }
//                             <li>
//                                 <button>{connected ? "Connected" : "Connect Wallet"}</button>
//                             </li>
//                         </ul>
//                     </li>
//                 </ul>
//             </nav>
//             <div>
//             {currentAddress !== "0x" ? "Connected to":"Not Connected. Please login to view NFTs"} {currentAddress !== "0x" ? (currentAddress.substring(0,15)+'...'):""}
//             </div>
//         </div>
//     )
// }

// export default Navbar