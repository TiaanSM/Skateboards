import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Header from './component/Header'
import Footer from './component/Footer';
import Catalogue from './component/Catalogue';
import Partner from './component/Partner';

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
    <Catalogue />
    </div>
      
  )
}

export default App;
