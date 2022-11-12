import { Routes, Route } from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Header from './component/layout/Header'
import Footer from './component/layout/Footer';
import Catalogue from './component/layout/Catalogue';
import Partner from './component/layout/Partner';

import BuyItem from './component/BuyItem';
import OpenMenu from './component/OpenMenu';

function App() {

  return (
    
    // colors: #e84a5f (pink), #def2f1 (lightblue)
    
    <div className="App">
      <Navbar />
      {/*
      <Routes>
          <Route path="/header" element={ <Header /> }></Route>
          <Route path="/footer" element={ <Footer /> }></Route>
      </Routes>
  */}
      <OpenMenu />
    </div>
      
  )
}

export default App;
