import Navbar from './Navbar';
import {useSelector} from 'react-redux';


function Home() {
  return (
    <div>
        <Navbar/>
      <header className='App-header'>
        Home
      </header>
    </div>
  );
}

export default Home;