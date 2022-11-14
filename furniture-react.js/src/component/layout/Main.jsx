import React from 'react'
import '../styles/Main.css';

const Main = () => {

    // carousel at the bottom of this section, auto moving.
  return (
    <article className="main-section">
        
    <div>
       <h3 className="main-title">
        THIS IS DECK-TECH.<br/> 
        HE'LL COME IN EVEN TO THOSE<br/>
        WHO ARE COMPLETELY<br/>
        INDIFFERENT TO<br/>
        SKATEBOARDING.</h3>
        <img src="" alt="" className="main-img-1" />
    </div>

    <div>
        <img src="" alt="" className="main-img-2" />

        <div className="main-text-container">
            <h5>WHO HAS TRIED IT, KNOWS EVERYTHING. THOSE WHO HAVEN'T - GET READY FOR THE DOPAMINE THIRST OF "THAT VERY TASTE"</h5>
            <p>Our goal is not ice cream. It would be quite simple. We need to make you "touched" when you, for example, bite into an Eskimo. It is difficult to do, but we do it. How? We do not tolerate simplifications: neither in tastes, nor in ingredients, nor in production. Pistachio, for example, we buy on a farm in the Bronte region, Sicily. We order Alfonso mango from India, and chocolate is brought to us directly from Belgium. Our Japanese matcha tea is exclusively of the Sagano variety.</p>
            <button>ABOUT US</button>
        </div>

        <img src="" alt="" className="main-img-3" />
    </div>
        
    </article>
  )
}

export default Main