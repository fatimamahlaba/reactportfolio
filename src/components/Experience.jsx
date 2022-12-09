import React from "react";
// import { FaGraduationCap } from "react-icons/fa";

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
      <h2 className="section_title"> Qualification</h2>
      <span className="section_subtitle"> My Personal Journey</span>

      <div className="qualification_container container">
      <div className="qualification_tabs">
      <div className="qualification_button button--flex">
      <i className="uil uil-graduation-cap qualification_ icon"></i>Education 
      </div>
      
      <div className="qualification_button button--flex">
      <i className="uil uil-briefcase-alt qualification_ icon"></i>Experience 
      </div>
      </div>
  
      <div className="qualification_sections">
      <div className="qualification_content">
      <div className="qualification_data">
       <div></div>
       <div>
      <span className="qualification_rounder"></span>
      <span className="qualification_line"></span>
      </div>
      <div>
      <h3 className="qualification_title"></h3>
      <span className="section_subtitle">Cput</span>
      <div className="qualification_calendar">
      <i className="uil uil-calendar-alt"></i> 2021 - Present
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
  )
}
export default Experience;