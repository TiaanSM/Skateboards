import { Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar/Navbar';
import Header from './component/Hero/Header'
import Footer from './component/Footer/Footer';
import Catalogue from './component/Catalog/Catalogue';
import Partner from './component/Partner/Partner';
import Main from './component/Main/Main';

import OpenMenu from './component/OpenMenu';

function App() {

  return (
    
    // colors: #e84a5f (pink), #def2f1 (lightblue)
    // css need to made scoped or replaced with styled components, or clean up and improve naming convention.
    
    <div className="App">
      <Navbar />
      {/*
      <Routes>
          <Route path="/header" element={ <Header /> }></Route>
          <Route path="/footer" element={ <Footer /> }></Route>
      </Routes>
  */}
      <Catalogue />
    </div>
      
  )
}

export default App;
