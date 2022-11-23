import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {

  const projects = [
    {
      img: "https://i.postimg.cc/mZQLDkLM/BMI.png",
      name: "BMI Culculator",
      github_link: "https://github.com/fatimamahlaba/BMI-Culculator.git",
      live_link: "https://myreactflix.netlify.app",
    },
    {
      img: "https://i.postimg.cc/C1pyTCf2/POS.png",
      name: "POS System",
      github_link: "https://github.com/fatimamahlaba/POS2.git",
      live_link: "https://myjobsearch.netlify.app",
    },
    {
      img: "https://i.postimg.cc/bNN7hwsq/Reaction-timer.png",
      name: "Reaction Timer",
      github_link: "https://github.com/fatimamahlaba/reaction-timer-game.git",
      live_link: "https://happy-lamport-8e96c8.netlify.app",
    },
    {
      img: "https://i.postimg.cc/pL51WhxM/Urban-roots.png",
      name: "Capstone Project",
      github_link: "https://github.com/fatimamahlaba/capstone-frontend.git",
      live_link: "https://reacttailwindnavbar.netlify.app",
    },
    {
      img: "https://i.postimg.cc/rstt0kps/Vue-to-do.png",
      name: "To-do App",
      github_link: "https://github.com/fatimamahlaba/Todo-app.git",
      live_link: "https://stalwart-jalebi-078964.netlify.app",
    },
    {
      img: "https://i.postimg.cc/SRpDxDyB/Stopwatch.png",
      name: "Stop Watch",
      github_link: "https://github.com/fatimamahlaba/Stopwatch.git",
      live_link: "https://vuecountry05.netlify.app",
    },
    {
      img: "https://i.postimg.cc/nrcBpY0k/image.png",
      name: "Client Tournament Bracket",
      github_link: "https://github.com/fatimamahlaba/tournament-bracket-plugin.git",
      live_link: "https://vuecountry05.netlify.app",
    },
  ];
  return(
    <section id="portfolio" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      
        <div className="">
          <Swiper
            slidesPreview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>

<div className="project-container">
  <div className="project">
     <div className="project-content">
      
       <h4 className="project-title">{project_info.name}</h4>
       <div className="project-details">
         <p>Lorem ipsum dolor amet you probably haven't heard of them bitters selvage listicle heirloom. Locavore kombucha street art ennui 90's, organic food truck hell of seitan skateboard literally hexagon fixie next level. Lomo salvia yuccie hella roof party echo park vegan four dollar toast cred.</p>
         <ul className="text-2xl gap-10">
           <a href={project_info.github_link}
                      target="_blank" ><FaGithub /></a>
           <a href={project_info.live_link}
                      target="_blank" ><FaExternalLinkAlt /></a>
         </ul>
       </div>
     </div>
    
     <div className="project-img">
       <img src= {project_info.img} alt="" />
     </div>
    
   </div>
 </div><br />
     </SwiperSlide>
            ))}
          </Swiper>
        </div>


    </section>
//     <section
//     id="Intro"
//     className="flex items-center justify-center flex-col pt-20 pb-6"
//     >
//   <div class="project-container">
//   <div class="project">
//     <div class="project-content">
      
//       <h4 class="project-title">A Clash of Kings</h4>
//       <div class="project-details">
//         <p>Lorem ipsum dolor amet you probably haven't heard of them bitters selvage listicle heirloom. Locavore kombucha street art ennui 90's, organic food truck hell of seitan skateboard literally hexagon fixie next level. Lomo salvia yuccie hella roof party echo park vegan four dollar toast cred.</p>
//         <ul>
//           <li>Shadow</li>
//           <li>Demon</li>
//           <li>Baby</li>
//         </ul>
//       </div>
//     </div>
    
//     <div class="project-img">
//       <img src="https://cdn.vox-cdn.com/thumbor/w-IFN0FWpN4BGfhZaV9EYqs4nLo=/51x0:977x617/1200x800/filters:focal(51x0:977x617)/cdn.vox-cdn.com/uploads/chorus_image/image/50017015/Screen_Shot_2016-07-04_at_12.37.15_PM.0.0.png" alt="" />
//     </div>
    
//   </div>
// </div>
//     </section>
)
  }

export default Portfolio;