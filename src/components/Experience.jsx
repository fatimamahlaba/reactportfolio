import React from "react";
import {useRef, useEffect} from 'react'

function Experience() {
  function Experience(header){
    return document.getElementsByClassName(tab-header);
  }
  
  let tabPanes = _class("tab-header")[0].getElementsByTagName("div");
  
  for(let i=0;i<tabPanes.length;i++){
    tabPanes[i].addEventListener("click",function(){
      _class("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
      tabPanes[i].classList.add("active");
      
      _class("tab-indicator")[0].style.top = `calc(80px + ${i*50}px)`;
      
      _class("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
      _class("tab-content")[0].getElementsByTagName("div")[i].classList.add("active");
      
    });
  }
   return (
      
        <section
           id="experience"
            className="min-h-screen flex items-center justify-center flex-col pt-20 pb-6"
               >
                <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Experience</span>
        </h3>
      </div><br /><br />


      <div class="tabs">
  <div class="tab-header">
    <div class="active">
      <i class="fa fa-code"></i> Code
    </div>
    <div>
      <i class="fa fa-pencil-square"></i> About
    </div>
    <div>
      <i class="fa fa-bar-chart"></i> Services
    </div>
    <div>
      <i class="fa fa-envelope"></i> Contact
    </div>
  </div>
  <div class="tab-indicator"></div>
  <div class="tab-content">
    
    <div class="active">
      <i class="fa fa-code"></i>
      <h2>This is code section</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
    </div>
    
    <div>
      <i class="fa fa-pencil-square"></i>
      <h2>This is about section</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
    </div>
    
    <div>
      <i class="fa fa-bar-chart"></i>
      <h2>This is services section</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
    </div>
    
    <div>
      <i class="fa fa-envelope"></i>
      <h2>This is contact section</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
    </div>
    
  </div>
</div>
        {/* <div className="container">
    <div className="tabs" ref={ref}>
    <a className="active tab tab-1" data-tab="1">Afriquezeen</a>
    <a className="tab tab-2"  data-tab="2">Cornerstone Institute</a>
    <a className="tab tab-3"  data-tab="3">Lifechoices Academy</a>
    <a className="tab tab-4"  data-tab="4">LC Studio</a>

    <span className="highlighter"></span>
    
  </div>

  <div className="content">

    <div className="content__section visible" data-tab="1">
      <h1 className="text-cyan-600">Director</h1>
      <p className="text-gray-600 text-xs">January 2019 - present</p>
      <ul  className="skill-list pl-5">
      <li className="text-gray-600">Plan and execute Company goals</li>
      <li className="text-gray-600">Managing the accounts and all administrative duties</li>
      <li className="text-gray-600">Managing staff</li>
      </ul>
    </div>

    <div className="content__section" data-tab="2">
    <h1 className="text-cyan-600">Web Developer Intern</h1>
      <p className="text-gray-600 text-xs"> 20 June 2022 - 20 July 2022</p>
      <ul  className="skill-list pl-5">
      <li className="text-gray-600">Data Capturing</li>
      <li className="text-gray-600">Building Prototypes for new website</li>
      </ul>
    </div>

    <div className="content__section" data-tab="3">
    <h1 className="text-cyan-600">Web Developer Intern</h1>
      <p className="text-gray-600 text-xs" >September 2021 - April 2022</p>
      <ul  className="skill-list pl-5">
      <li className="text-gray-600">6 month coding bootcamp</li>
      <li className="text-gray-600">6 months internship</li>
      </ul>
    </div>

    <div className="content__section" data-tab="4">
    <h1 className="text-cyan-600">IT Support Intern</h1>
      <p className="text-gray-600 text-xs" >September 2022 - 20 April 2022</p>
      <ul  className="skill-list pl-5">
      <li className="text-gray-600">6 month coding bootcamp</li>
      <li className="text-gray-600">6 months internship</li>
      </ul>
    </div>
  </div>
</div> */}

        </section>
   )
  }

export default Experience;

// import React from "react";

// const Experience = () => {
//     return (
//         <section className="qualification section">
//         <h2 className="sectio_title"> Qualification</h2>
//         <span className="section_subtitle"> My Personal Journey</span>
//         <div className="qualification_container container">
//         <div className="qualification_tabs">
//         <div className="qualification_button qualification_active button--flex">
//         <i className="uil uil-graduation-cap qualification_ icon"></i>Education {" "}
//         </div>
//         <div className="qualification_button button--flex">
//         <i className="uil uil-briefcase-alt qualification_ icon"></i>Experience {" "}
//         </div>
//         </div>
    
//         <div className="qualification_sections">
//         <div className="qualification_content">
//         <div className="qualification_data">
//          <div></div>
//          <div>
//         <span className="qualification_rounder"></span>
//         <span className="qualification_line"></span>
//         </div>
//         <div>
//         <h3 className="qualification_title"></h3>
//         <span className="section_subtitle">Cput</span>
//         <div className="qualification_calendar">
//         <i className="uil uil-calendar-alt"></i> 2021 - Present
//         </div>
//         </div>
//         </div>
//         </div>
//         </div>
//         </div>
//         </section>
//     )
// }
// export default Experience;
