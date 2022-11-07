import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Header from './component/Header'
import Footer from './component/Footer';

function App() {

  return (
    
    // colors: #e84a5f (pink), #def2f1 (lightblue)
    // font-family: cervo, HelveticaNeueCyr
    
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
