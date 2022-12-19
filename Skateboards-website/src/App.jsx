import { Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar/Navbar';
import Header from './component/Hero/Header'
import Main from './component/Main/Main';
import Catalogue from './component/Catalog/Catalogue';
import Partner from './component/Partner/Partner';
import Location from './component/Location/Location';
import FooterImage from './component/FooterImage/FooterImage';
import Footer from './component/Footer/Footer';

import OpenMenu from './component/Navbar/OpenMenu';
import Info from './component/Info/Info';
import OverlayHero from './component/Hero/OverlayHero';
import Carousel from './component/Main/Carousel';

function App() {

  return (
    // add react spring for animations.
    // colors: #e84a5f (pink), #def2f1 (lightblue)
    // css need to made scoped or replaced with styled components, or clean up and improve naming convention.
    
    <div className="App">
      
      <Navbar />
      <Header />
      <Main />
      <Catalogue />
      <Partner />
      <Location />
      <Info />
      <FooterImage />
      <Footer />
     
    </div>
      
  )
}

export default App;
