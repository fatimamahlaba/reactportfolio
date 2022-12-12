import React from "react";
import { FaBriefcase, FaCalendarAlt, FaGraduationCap } from "react-icons/fa";

// const Experience = () => {
//   function _class(name) {
//     return document.getElementsByClassName(name);
    
//   }
  
//   setTimeout(() => {
//     let tabPanes = _class("tab-header")[0].getElementsByTagName('div'); for (let i = 0; i < tabPanes.length; i++) {
//       tabPanes[i].addEventListener("click", function () {
//         _class("tab-header")[0]
//           .getElementsByClassName("active")[0]
//           .classList.remove("active");
//         tabPanes[i].classList.add("active");
    
//         _class("tab-indicator")[0].style.top = `calc(80px + ${i * 50}px)`;
    
//         _class("tab-content")[0]
//           .getElementsByClassName("active")[0]
//           .classList.remove("active");
//         _class("tab-content")[0]
//           .getElementsByTagName("div")[i].classList.add("active");
//       });
//     }  }, 1000);
  
  
  
  
//     return (
// <section
//       id="experience"
//       className="min-h-screen min-w-screen pt-20 items-center" 
//     > 
//    <div className="text-center">
//         <h3 className="text-4xl font-semibold">
//           My <span className="text-cyan-600">Experience</span>
//         </h3>
//       </div>

// <div className="container">
//       <div className="tabs items-center pt-20">
//    <div className="tab-header">
//     <div className="active">
//        Education
//     </div>
  
//     <div>
//       Work
//     </div>
//   </div>

//   <div className="tab-indicator"></div>
//   <div className="tab-content">
//     <div className="active">
//       <FaGraduationCap />
//       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
//     </div>
    
//     {/* <div>
//       <i className="fa fa-pencil-square"></i>
//       <h2>This is about section</h2>
//       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
//     </div> */}
    
//     {/* <div>
//       <i className="fa fa-bar-chart"></i>
//       <h2>This is services section</h2>
//       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
//     </div> */}
    
//     <div>
//       <i className="fa fa-envelope"></i>
//       <h2>This is contact section</h2>
//       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
//     </div>
    
//   </div>
// </div>
// </div>
// </section>
//     );
// };   
        
// export default Experience;     

const Experience = () => {
  return (
      <section className="qualification section">
        <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Experience</span>
        </h3>
      </div>
      {/* <h2 className="section_title"> Qualification</h2>
      <span className="section_subtitle"> My Personal Journey</span> */}

      <div className="qualification_container container">
      <div className="qualification_tabs mb-2">
      <div className="qualification_button font-medium qualification_active flex button--flex">
      <FaGraduationCap /> Education 
      </div>
      
      <div className="qualification_button font-medium flex button--flex">
      <FaBriefcase />Experience 
      </div>
      </div>
  
      <div className="qualification_sections grid grid-cols-1 justify-center">
      <div className="qualification_content qualification_active">
      <div className="qualification_data">
      <div>
      <h3 className="qualification_title font-medium">Company</h3>
      <span className="qualification_subtitle inline-block font-small mb-1">Cput</span>
      <div className="qualification_calendar  flex font-light">
      <FaCalendarAlt /> 2021 - Present
      </div>
      </div>

       <div>
      <span className="qualification_rounder inline-block bg-cyan-600 w-3 h-3 rounded-full"></span>
      <span className="qualification_line"></span>
      </div>
       </div>

      <div className="qualification_data">
       <div></div>

      <div>
      <span className="qualification_rounder inline-block bg-cyan-600 w-3 h-3 rounded-full"></span>
      <span className="qualification_line"></span>
      </div> 

      <div>
      <h3 className="qualification_title font-medium">Company</h3>
      <span className="qualification_subtitle inline-block font-small mb-1">Cput</span>
      <div className="qualification_calendar font-light">
      <FaCalendarAlt /> 2021 - Present
      </div>
      </div>
      </div>
{/* next section in timeline */}
<div className="qualification_data">
      <div>
      <h3 className="qualification_title font-medium">Company</h3>
      <span className="qualification_subtitle inline-block font-small mb-1">Cput</span>
      <div className="qualification_calendar font-light">
      <FaCalendarAlt /> 2021 - Present
      </div>
      </div>

       <div>
      <span className="qualification_rounder inline-block bg-cyan-600 w-3 h-3 rounded-full"></span>
      <span className="qualification_line"></span>
      </div>
       </div>

      <div className="qualification_data">
       <div></div>

      <div>
      <span className="qualification_rounder inline-block bg-cyan-600 w-3 h-3 rounded-full"></span>
      <span className="qualification_line"></span>
      </div> 

      <div>
      <h3 className="qualification_title font-medium">Company</h3>
      <span className="qualification_subtitle inline-block font-small mb-1">Cput</span>
      <div className="qualification_calendar font-light">
      <FaCalendarAlt /> 2021 - Present
      </div>
      </div>
      </div>
      </div>
{/* start of experience section */}

      <div className="qualification_content">
      <div className="qualification_data">
      <div>
      <h3 className="qualification_title font-medium">Company</h3>
      <span className="qualification_subtitle inline-block font-small mb-1">Cput</span>
      <div className="qualification_calendar font-light">
      <FaCalendarAlt /> 2021 - Present
      </div>
      </div>

       <div>
      <span className="qualification_rounder inline-block bg-cyan-600 w-3 h-3 rounded-full"></span>
      <span className="qualification_line"></span>
      </div>
       </div>

      <div className="qualification_data">
       <div></div>

      <div>
      <span className="qualification_rounder inline-block bg-cyan-600 w-3 h-3 rounded-full"></span>
      <span className="qualification_line"></span>
      </div> 

      <div>
      <h3 className="qualification_title font-medium">Company</h3>
      <span className="qualification_subtitle inline-block font-small mb-1">Cput</span>
      <div className="qualification_calendar font-light">
      <FaCalendarAlt /> 2021 - Present
      </div>
      </div>
      </div>

<div className="qualification_data">
      <div>
      <h3 className="qualification_title font-medium">Company</h3>
      <span className="qualification_subtitle inline-block font-small mb-1">Cput</span>
      <div className="qualification_calendar font-light">
      <FaCalendarAlt /> 2021 - Present
      </div>
      </div>

       <div>
      <span className="qualification_rounder inline-block bg-cyan-600 w-3 h-3 rounded-full"></span>
      <span className="qualification_line"></span>
      </div>
       </div>

      
      </div>
      </div>
      </div>
      </section>
  );
};
export default Experience;