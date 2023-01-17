import Navbar from './Navbar';
import {useSelector} from 'react-redux';
import '/Users/basalebi/Documents/GitHub/nftminting/src/components/compCSS/Home.css'
import img from '/Users/basalebi/Documents/GitHub/nftminting/src/components/Images/img.jpeg'

function Home() {

  const state = useSelector((state) => state);
  console.log('Home', state);

  return (
    <div>
        <Navbar/>
        <h1 className='wande'>
        I'm chilling with my Daddy Wande Coal
        </h1>
        <img className='coal' src={img} alt="Logo" />

    </div>
  );
}

export default Home;