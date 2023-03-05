import React from "react";
import "./gallery.css";


function Gallery() {
  return (
    
      <section class="content">
      <h1>Gallery</h1>
  <div class="gallery-image">
    <div class="img-box">
      <img src="https://i.ibb.co/Mp1TFrG/Screenshot-2023-03-04-at-00-58-41.png" alt="weather app" />
      <div class="transparent-box">
        <div class="caption">
          <p>Weather App</p>
          <p class="opacity-low">5 day weather report</p>
        </div>
      </div> 
    </div>
    <div class="img-box">
      <img src="https://picsum.photos/350/250/?image=232" alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>Night Sky</p>
          <p class="opacity-low">Cinematic</p>
        </div>
      </div>
    </div>
    <div class="img-box">
      <img src="https://picsum.photos/350/250/?image=431" alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>Tea Talk</p>
          <p class="opacity-low">Composite</p>
        </div>
      </div>
    </div>
    <div class="img-box">
      <img src="https://picsum.photos/350/250?image=474" alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>Road</p>
          <p class="opacity-low">Landscape</p>
        </div>
      </div> 
    </div>
    <div class="img-box">
      <img src="https://picsum.photos/350/250?image=344" alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>Sea</p>
          <p class="opacity-low">Cityscape</p>
        </div>
      </div> 
    </div>
    <div class="img-box">
      <img src="https://picsum.photos/350/250?image=494" alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>Vintage</p>
          <p class="opacity-low">Cinematic</p>
        </div>
      </div> 
    </div>
  </div>





    </section>
  );
}

export default Gallery;
