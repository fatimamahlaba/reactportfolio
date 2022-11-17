import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

function Portfolio() {
  return(
    <section
    id="Intro"
    className="flex items-center justify-center flex-col pt-20 pb-6"
    >
  <div class="project-container">
  <div class="project">
    <div class="project-content">
      
      <h4 class="project-title">A Clash of Kings</h4>
      <div class="project-details">
        <p>Lorem ipsum dolor amet you probably haven't heard of them bitters selvage listicle heirloom. Locavore kombucha street art ennui 90's, organic food truck hell of seitan skateboard literally hexagon fixie next level. Lomo salvia yuccie hella roof party echo park vegan four dollar toast cred.</p>
        <ul>
          <li>Shadow</li>
          <li>Demon</li>
          <li>Baby</li>
        </ul>
      </div>
    </div>
    
    <div class="project-img">
      <img src="https://cdn.vox-cdn.com/thumbor/w-IFN0FWpN4BGfhZaV9EYqs4nLo=/51x0:977x617/1200x800/filters:focal(51x0:977x617)/cdn.vox-cdn.com/uploads/chorus_image/image/50017015/Screen_Shot_2016-07-04_at_12.37.15_PM.0.0.png" alt="" />
    </div>
    
  </div>
</div>
    </section>
)
  }

export default Portfolio;