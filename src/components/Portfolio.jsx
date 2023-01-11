import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {

  const projects = [
    { 
      id: 1,
      img: "https://i.postimg.cc/mZQLDkLM/BMI.png",
      content: "HTML, CSS, Javascript",
      name: "BMI Calculator",
      github_link: "https://github.com/fatimamahlaba/BMI-Culculator.git",
      live_link: "https://hungry-shirley-17d235.netlify.app",
    },
    {
      id: 2,
      img: "https://i.postimg.cc/C1pyTCf2/POS.png",
      content: "Vue",
      name: "POS System",
      github_link: "https://github.com/fatimamahlaba/POS2.git",
      live_link: "https://peaceful-blackwell-7fd25e.netlify.app",
    },
    {
      id: 3,
      img: "https://i.postimg.cc/bNN7hwsq/Reaction-timer.png",
      content: "Vue",
      name: "Reaction Timer",
      github_link: "https://github.com/fatimamahlaba/reaction-timer-game.git",
      live_link: "https://happy-lamport-8e96c8.netlify.app",
    },
    {
      id: 4,
      img: "https://i.postimg.cc/wj1vRYzf/Screenshot-2023-01-10-104538.png",
      content: "HTML, CSS, Javascript",
      name: "Ecommerce Project",
      github_link: "https://github.com/fatimamahlaba/e-commerce",
      live_link: "https://lucent-puffpuff-d9f59b.netlify.app",
    },
    {
      id: 5,
      img: "https://i.postimg.cc/rstt0kps/Vue-to-do.png",
      content: "Vue",
      name: "To-do App",
      github_link: "https://github.com/fatimamahlaba/Todo-app.git",
      live_link: "https://stalwart-jalebi-078964.netlify.app",
    },
    {
      id: 6,
      img: "https://i.postimg.cc/SRpDxDyB/Stopwatch.png",
      content: "HTML, CSS, Javascript",
      name: "Stop Watch",
      github_link: "https://github.com/fatimamahlaba/Stopwatch.git",
      live_link: "https://affectionate-northcutt-dc4a44.netlify.app",
    },
    {
      id: 7,
      img: "https://i.postimg.cc/nrcBpY0k/image.png",
      content: "PHP",
      name: "Tournament Bracket Plugin",
      github_link: "https://github.com/fatimamahlaba/tournament-bracket-plugin.git",
    },
    {
      id: 8,
      img: "https://i.postimg.cc/MHZ9GT1F/Screenshot-2023-01-10-100735.png",
      content: "Figma",
      name: "LCS Design Case Study",
      live_link: "https://www.figma.com/file/IBbvqqzFmBUjpOyeoaDy2C/Life-Choices-Academy?node-id=406%3A77&t=KHGvhGtjlixgg8nz-0",
    },
    {
      id: 9,
      img: "https://i.postimg.cc/137NTdbx/nurturer.png",
      content: "Wordpress",
      name: "Nurturer",
      live_link: "https://nurturer.co.za/",
    },
    {
      id: 10,
      img: "https://i.postimg.cc/DycPBnhB/accents.png",
      content: "Wordpress",
      name: "Accents",
      live_link: "https://accents.co.za/",
    },
    {
      id: 11,
      img: "https://i.postimg.cc/BnwLgcZQ/Dashboard.png",
      content: "React",
      name: "Dashboard",
      live_link: "https://github.com/fatimamahlaba/dashboard",
    },
  ];
  return(
    <section id="portfolio" className="min-h-screen min-w-screen pt-28 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
      </div>
      <br />
      
        <div className="">
          <Swiper
            slidespreview={1.2}
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
         <p className="project-content">{project_info.content}</p>
         <ul className="text-2xl gap-10 hover:text-white">
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
)
  }

export default Portfolio;