import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Header from './component/Header'
import Footer from './component/Footer';

function App() {

  return (
    
    // Main section
    // 
    
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/header" element={ <Header /> }></Route>
          <Route path="/footer" element={ <Footer /> }></Route>
      </Routes>
    </div>
      
  )
}

export default App;
