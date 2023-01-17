import Navbar from './Navbar';
import {useSelector} from 'react-redux';
import '../components/compCSS/Home.css';
import img from '../components/Images/img.jpeg'

function Home() {

  const state = useSelector((state) => state);
  console.log('Home', state);

  return (
    <div>
        <Navbar/>
        <h1 className='wande'>
        I'm chilling with my Daddy Wande Coal
        </h1>
        <h2 className='skaba'>
          EEE SKABA EEEE SKOLOBOTO
        </h2>
        <img className='coal' src={img} alt="Logo" />

    </div>
  );
}

export default Home;