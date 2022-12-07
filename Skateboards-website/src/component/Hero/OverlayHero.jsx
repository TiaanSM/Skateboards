import React from 'react'
import IconButton from '../General/IconButton';

const OverlayHero = () => {
  return (

    <div className="text-overlay-container">
      <div className="text-container">
        <h2 className="special-title"><span>TRUE</span><br/> <span>SK8</span><br/> <span>BOA</span></h2>
      </div>
      <div className="paragraph-container">
        <p className="overlay-desc">
        No, girl, I don't like all these ice creams and frozen juices... When I was a kid I liked it, of course, but I don't know what else I liked... let's have the usual, white chocolate-covered... And what's that lilac soap you have? mr.pops? I'll take the bright yellow one, what's that? Mango-maracuya? Oh, it's cold! And what's that crunching on your teeth? Bones... cool! And can I bring this pink one, too!
        </p>
        <IconButton />
        <span className="title-tail">RDS</span>
      </div>
  </div>
  )
}

export default OverlayHero