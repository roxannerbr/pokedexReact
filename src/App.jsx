import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Pokedex from './components/Pokedex';
import Home from './components/Home';
import Item from './components/Item';
import ProtectedRoutes from './components/ProtectedRoutes';
/* import Pagination from './components/Pagination'; */
/* import pokedex from "./assets/img/pokedex.png" */
import gif from "./assets/img/gif.gif"
import Confi from './components/Confi';

function App() {


  return (
    <div className="App">
      <HashRouter>
      <header>
          {/* <img className='title' src={pokedex} alt="pokedex" /> */}
          <div className='yellow_stripe'></div>
          <div className='white_circle'>
            <div className='gray_circle'>
              <a href="/">
              <img src={gif} alt="" />
              </a>         
            </div>
          </div>
          <div className='black_stripe'></div>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/pokedex' element={<Pokedex />} />
            <Route path='/pokedex/:id' element={<Item />} />
            <Route path='/confi' element={<Confi />} />
          </Route>
        </Routes>
        {/* <footer>
          <p>By <strong>Roxana Romaniello</strong> | Formar Software Factory</p>
        </footer> */}
      </HashRouter>
    </div>
  )
}

export default App;
