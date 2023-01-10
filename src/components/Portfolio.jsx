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
      content: "This Body Mass Index (BMI) Calculator can be used to calculate BMI value and corresponding weight status while taking age into consideration.",
      name: "BMI Culculator",
      github_link: "https://github.com/fatimamahlaba/BMI-Culculator.git",
      live_link: "https://hungry-shirley-17d235.netlify.app",
    },
    {
      id: 2,
      img: "https://i.postimg.cc/C1pyTCf2/POS.png",
      content: "This point of sale system is a retail transaction system. In this point of sale, the merchant calculates the amount owed by the customer, and indicates the customer to make payment.",
      name: "POS System",
      github_link: "https://github.com/fatimamahlaba/POS2.git",
      live_link: "https://peaceful-blackwell-7fd25e.netlify.app",
    },
    {
      id: 3,
      img: "https://i.postimg.cc/bNN7hwsq/Reaction-timer.png",
      content: "Reaction timer is a game to test how fast you reacts. This game records if you are too fast or too slow.",
      name: "Reaction Timer",
      github_link: "https://github.com/fatimamahlaba/reaction-timer-game.git",
      live_link: "https://happy-lamport-8e96c8.netlify.app",
    },
    {
      id: 4,
      img: "https://i.postimg.cc/wj1vRYzf/Screenshot-2023-01-10-104538.png",
      content: "This is the my very first ecommerce store.",
      name: "Ecommerce Project",
      github_link: "https://github.com/fatimamahlaba/e-commerce",
      live_link: "https://lucent-puffpuff-d9f59b.netlify.app",
    },
    {
      id: 5,
      img: "https://i.postimg.cc/rstt0kps/Vue-to-do.png",
      content: "ToDo List App is a app that is used to maintain your day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning our daily schedules.",
      name: "To-do App",
      github_link: "https://github.com/fatimamahlaba/Todo-app.git",
      live_link: "https://stalwart-jalebi-078964.netlify.app",
    },
    {
      id: 6,
      img: "https://i.postimg.cc/SRpDxDyB/Stopwatch.png",
      content: "A stopwatch measures the amount of time that elapses between its activation and deactivation. It can also be called restarted.",
      name: "Stop Watch",
      github_link: "https://github.com/fatimamahlaba/Stopwatch.git",
      live_link: "https://affectionate-northcutt-dc4a44.netlify.app",
    },
    {
      id: 7,
      img: "https://i.postimg.cc/nrcBpY0k/image.png",
      content: "A tournament bracket is a tree diagram that represents the series of games played during a knockout tournament. This is a single-elimination tournament bracket.",
      name: "Tournament Bracket Plugin",
      github_link: "https://github.com/fatimamahlaba/tournament-bracket-plugin.git",
      // live_link: "",
    },
    {
      id: 8,
      img: "https://i.postimg.cc/MHZ9GT1F/Screenshot-2023-01-10-100735.png",
      content: "Prototype Design for Life Choices",
      name: "Figma Design",
      live_link: "https://www.figma.com/file/IBbvqqzFmBUjpOyeoaDy2C/Life-Choices-Academy?node-id=406%3A77&t=KHGvhGtjlixgg8nz-0",
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