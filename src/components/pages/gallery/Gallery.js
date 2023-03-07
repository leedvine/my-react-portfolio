import React from "react";
import "./gallery.css";
import travellersFriend from "../../../assets/images/travellers-friend-app.jpg";
import weatherForecast from "../../../assets/images/weather-app.jpg";
import passwordGenerator from "../../../assets/images/generator-app.jpg";
import dayPlanner from "../../../assets/images/day-planner-app.jpg";
import javascriptQuiz from "../../../assets/images/quiz-app.jpg";
import bootstrapPortfolio from "../../../assets/images/bootstrap-app.jpg";


function Gallery() {
  return (
    
      <section class="content">
      <h1>Gallery</h1>
  <div class="gallery-image">
    <div class="img-box">
      <img src={travellersFriend} alt="Interactive Travel Assistant" />
      <div class="transparent-box">
        <div class="caption">
          <p>The Travellers Friend</p>
          <p class="opacity-100">Interactive Travel Assistant</p>
        </div>
      </div> 
    </div>
    <div class="img-box">
      <img src={weatherForecast} alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>Weather Forecast</p>
          <p class="opacity-100">World Wide 5 Day Forecast</p>
        </div>
      </div>
    </div>
    <div class="img-box">
      <img src={passwordGenerator} alt="Password Generator App" />
      <div class="transparent-box">
        <div class="caption">
          <p>Password Generator</p>
          <p class="opacity-100">Create a secure / unique password</p>
        </div>
      </div>
    </div>
    <div class="img-box">
      <img src={dayPlanner} alt="Day Planner App" />
      <div class="transparent-box">
        <div class="caption">
          <p>Day Planner</p>
          <p class="opacity-100">Interactive Day Planner App</p>
        </div>
      </div> 
    </div>
    <div class="img-box">
      <img src={javascriptQuiz} alt="Javascript Quiz App" />
      <div class="transparent-box">
        <div class="caption">
          <p>Javascript Quiz</p>
          <p class="opacity-100">Quiz App to Test your Javascript knowledge</p>
        </div>
      </div> 
    </div>
    <div class="img-box">
      <img src={bootstrapPortfolio} alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>Bootstrap Portfolio</p>
          <p class="opacity-100">Portfolio Page Demonstarting Bootstrap Framework</p>
        </div>
      </div> 
    </div>
  </div>





    </section>
  );
}

export default Gallery;
