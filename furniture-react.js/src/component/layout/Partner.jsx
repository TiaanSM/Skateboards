import React from 'react'
import '../styles/Partner.css';

const Partner = () => {

  // image streching, text color little hard to see.
  // fix: change image || make container parralex and change text color.../// img src={require('../img/img-8.jpg')} alt=""

  return (

    <section className="partner-section">
        <div className="partner-img" ></div>
        <h5 className="partner-title">WE LOVE<br/>PARTNERSHIP</h5>
        <p className="partner-desc">
            Situation: your place, be it a city cafe,<br/> deli or bar, has got everything in the world. Almost.
            It is quite<br/> possible that you lack mr.pops. And this can be fixed.
        </p>
    </section>
    
  )
}

export default Partner;