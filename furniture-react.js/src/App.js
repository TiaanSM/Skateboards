import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Header from './component/Header'
import About from './component/About';

function App() {

  return (
    
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/header" element={ <Header /> }></Route>
          <Route path="/about" element={ <About /> }></Route>
      </Routes>
    </div>
      
  )
}

export default App;
