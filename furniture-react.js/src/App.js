import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Header from './component/Header'
import Footer from './component/Footer';

function App() {

  return (
    // Finish navbar
    // Complete header

    // Check mobile responsiveness before moving on to next section.
    // Use styled components for styling.
    
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
