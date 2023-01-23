import { useSelector } from "react-redux";
import { pinJSONToIPFS } from "./pinata";
require('dotenv').config();
const alchemyKey = process.env.REACT_APP_API_URL;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

