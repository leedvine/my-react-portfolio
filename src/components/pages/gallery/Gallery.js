import React from "react";
import "./gallery.css";


function Gallery() {
  return (
    
      <section class="content">
      <h1>Gallery</h1>
  <div class="gallery-image">
    <div class="img-box">
      <img src="https://i.ibb.co/LZg4BS6/travellers-friend-min.jpg" alt="Interactive Travel Assistant" />
      <div class="transparent-box">
        <div class="caption">
          <p>The Travellers Friend</p>
          <p class="opacity-low">Interactive Travel Assistant</p>
        </div>
      </div> 
    </div>
    <div class="img-box">
      <img src="https://i.ibb.co/hYj4dpt/weather-min.jpg" alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>Weather Forecast</p>
          <p class="opacity-low">World Wide 5 Day Forecast</p>
        </div>
      </div>
    </div>
    <div class="img-box">
      <img src="https://i.ibb.co/pZSDnps/generator-min.jpg" alt="Password Generator App" />
      <div class="transparent-box">
        <div class="caption">
          <p>Password Generator</p>
          <p class="opacity-low">Create a secure / unique password</p>
        </div>
      </div>
    </div>
    <div class="img-box">
      <img src="https://i.ibb.co/nL9GNSz/day-plan.jpg" alt="Day Planner App" />
      <div class="transparent-box">
        <div class="caption">
          <p>Day Planner</p>
          <p class="opacity-low">Interactive Day Planner App</p>
        </div>
      </div> 
    </div>
    <div class="img-box">
      <img src="https://i.ibb.co/dLfGWYY/quiz-min.jpg" alt="Javascript Quiz App" />
      <div class="transparent-box">
        <div class="caption">
          <p>Javascript Quiz</p>
          <p class="opacity-low">Quiz App to Test your Javascript knowledge</p>
        </div>
      </div> 
    </div>
    <div class="img-box">
      <img src="https://i.ibb.co/Gn47tT1/bootstrap-min.jpg" alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>Bootstrap Portfolio</p>
          <p class="opacity-low">Portfolio Page Demonstarting Bootstrap Framework</p>
        </div>
      </div> 
    </div>
  </div>





    </section>
  );
}

export default Gallery;
