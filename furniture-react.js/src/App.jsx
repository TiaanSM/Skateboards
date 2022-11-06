import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Header from './component/Header'
import Footer from './component/Footer';

function App() {

  return (
    
    // colors:
    //darkblue  #2b4d59
    //lightblue  #39998e
    //yellow  #ffdc7c
    //orange  #ffaa67
    //dark orange  #da674a 
    
    <div className="App">
      <Navbar />
      {/*
      <Routes>
          <Route path="/header" element={ <Header /> }></Route>
          <Route path="/footer" element={ <Footer /> }></Route>
      </Routes>
  */}
    </div>
      
  )
}

export default App;
