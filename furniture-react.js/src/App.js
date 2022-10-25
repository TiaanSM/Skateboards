import Navbar from './Navbar';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={ <Home /> } />
        </Routes>
      </div>
    </>
  );
}

export default App;
