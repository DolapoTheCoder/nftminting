import Navbar from './Navbar';
import {useSelector} from 'react-redux';


function Home() {

  const state = useSelector((state) => state);
  console.log('Home', state);

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