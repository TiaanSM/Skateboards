import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
function App() {

  return (
    
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={ <Home /> }></Route>
          <Route path="/about" element={ <About /> }></Route>
          <Route path="/contact" element={ <Contact /> }></Route>
      </Routes>
  
    </div>
      
  )
}

export default App;
