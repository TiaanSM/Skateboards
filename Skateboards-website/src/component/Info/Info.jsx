import './Info.css';
import React, { useRef, useEffect } from "react";
import ImageScroll from './ImageScroll';

const Info = () => {

  // main video on left side 
  // same fixed and scrolling effect
  // text right side sliding up
  // video no sound and hover play icon

  // intersection observer

  

  return (
    <div className="info-container">

      
      <ImageScroll
        startPosition={100}
        endPosition={500}
        src="https://example.com/image.png"
      />
      

      <div className="info-text-container">
      <p className="top-paragraph">
        Do you want to become our partner? We are open to cooperation, but first we always get acquainted with the location to find "our own". So no offense -           there are also cases when we are destined to grow separately.
      </p>
      
      <div className="question-paragraph">
        <h3 className="question-title">DEAL? THEN FILL OUT THE FORM</h3>
        <p className="question-desc">
          Just 10 basic questions that will take 10 minutes at most.
          But these 10 minutes can be the start of our joint flight. It is not only for Musk and Bezos to conquer space.
        </p>
        <button className="question-btn">Fill out the questionnaire</button>
      </div>
      
      <div className="last-paragraph">
        <h3 className="last-title">IT REMAINS TO WAIT FOR THE LETTER</h3>
        <p className="last-desc">
          After filling out the questionnaire, our manager will process it and send you detailed information about cooperation. This includes prices, equipment           rental conditions, and recommended retail price. After that we will be able to start. Even if the stars are not aligned and we are not on the way yet,           we will still write to you.
        </p>
      </div>
     </div>
     </div>
  )
}
   
export default Info;

/*
inView ? 'video-moving-container' : 'video-container';
*/