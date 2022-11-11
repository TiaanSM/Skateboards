import React from 'react'
import '../styles/Partner.css';

const Partner = () => {
  return (
    <section>
        <img src={require('../img/partner-img.jpg')} alt="" className="partner-img" />
        <h5 className="partner-title">WE LOVE<br/>PARTNERSHIP</h5>
        <p className="partner-desc">
            Situation: your place, be it a city cafe,<br/> deli or bar, has got everything in the world. Almost.
            It is quite<br/> possible that you lack mr.pops. And this can be fixed.
        </p>
    </section>
  )
}

export default Partner;