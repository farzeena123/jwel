import { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home';
import {Route,Routes} from 'react-router-dom'
import NecklacePage from './Components/Pages/NecklacePage';
import BanglesPage from './Components/Pages/BanglesPage';
import EarringsPage from './Components/Pages/EarringsPage';
import About from './Components/About';
import RingsPage from './Components/Pages/RingsPage';
import Cart from './Components/Cart/Cart';
import {CartProvider} from 'react-use-cart'
import Checkout from './Components/Checkout/Checkout';
import Loading from './Components/Loading/Loading';


function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="App">
      {!loaded ? (
        <Loading/>
      ):(
    
       
       <CartProvider>
        <Routes>
          <Route exact path='/' element={<Home/>}  />
        </Routes>
        <Routes>
          <Route path='/about' element={<About/>}  />
        </Routes>
        <Routes>
          <Route path='/pendant' element={<NecklacePage/>}  />
        </Routes>
        <Routes>
          <Route path='/earrings' element={<EarringsPage/>}  />
        </Routes>
        <Routes>
          <Route path='/bangles' element={<BanglesPage/>}  />
        </Routes>
        <Routes>
          <Route path='/rings' element={<RingsPage/>}  />
        </Routes>
        <Routes>
        <Route path='/cart' element={<Cart/>}  />
        </Routes>
        <Routes>
          <Route path='/checkout' element={<Checkout/>}  />
        </Routes>
        </CartProvider>
        )}
    </div>
  );
}

export default App;
