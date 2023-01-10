import React, {useState} from "react";
import { FaBriefcase, FaCalendarAlt, FaGraduationCap } from "react-icons/fa";


const Experience = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
      <section id="experience" className="qualification section">
        <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Experience</span>
        </h3>
      </div>
      {/* <h2 className="section_title"> Qualification</h2>
      <span className="section_subtitle"> My Personal Journey</span> */}

      <div className="qualification_container container">
      <div className="qualification_tab text-2xl font-large content-center mb-2">
      <div className={toggleState === 1 ? "qualification_button gap-2 qualification_active flex button--flex" : "qualification_button gap-2 font-medium flex button--flex" }
      onClick={() => toggleTab(1)}>
      <FaGraduationCap /> Education 
      </div>
      
      <div className={toggleState === 2 ? "qualification_button gap-2 qualification_active flex button--flex" : "qualification_button gap-2 font-medium flex button--flex" }
      onClick={() => toggleTab(2)}>
      <FaBriefcase />Experience 
      </div>
      </div>
  
      <div className="qualification_sections grid grid-cols-1 content-center">
      <div className= {toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"}>
      <div className="qualification_data">
      <div>
      <h3 className="qualification_title font-medium">Matric</h3>
      <span className="qualification_subtitle inline-block font-small mb-1">Islamia College</span>
      <div className="qualification_calendar gap-2 flex font-light">
      <FaCalendarAlt /> 2014
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
      <h3 className="qualification_title font-medium">ND: Retail Business Management </h3>
      <span className="qualification_subtitle inline-block font-small mb-1">Cape Peninsula University of Cape Town</span>
      <div className="qualification_calendar gap-2 flex font-light">
      <FaCalendarAlt /> 2016 - 2019
      </div>
      </div>
      </div>

<div className="qualification_data">
      <div>
      <h3 className="qualification_title font-medium">Diploma In Transportation Management</h3>
      <span className="qualification_subtitle inline-block font-small mb-1">University of Johannesburg</span>
      <div className="qualification_calendar gap-2 flex font-light">
      <FaCalendarAlt /> 2020
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
      <h3 className="qualification_title font-medium">Coding Bootcamp</h3>
      <span className="qualification_subtitle inline-block font-small mb-1">Life Choices Academy</span>
      <div className="qualification_calendar gap-2 flex font-light">
      <FaCalendarAlt /> September 2021 - March 2022
      </div>
      </div>
      </div>
      </div>
{/* start of experience section */}

      <div className={toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"}>
      <div className="qualification_data">
      <div>
      <h3 className="qualification_title font-medium">Director</h3>
      <span className="qualification_subtitle inline-block font-small mb-1">Afriquezeen Resturaunt</span>
      <div className="qualification_calendar gap-2 flex font-light">
      <FaCalendarAlt /> January 2019 - Present
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
      <h3 className="qualification_title font-medium">Web Developer Intern</h3>
      <span className="qualification_subtitle inline-block font-small mb-1">Cornerstone Institute</span>
      <div className="qualification_calendar gap-2 flex font-light">
      <FaCalendarAlt /> 20 June 2022 - 20 July 2022
      </div>
      </div>
      </div>

<div className="qualification_data">
      <div>
      <h3 className="qualification_title font-medium">IT Support Intern</h3>
      <span className="qualification_subtitle inline-block font-small mb-1">Life Choices</span>
      <div className="qualification_calendar gap-2 flex font-light">
      <FaCalendarAlt  /> September 2022 - Present
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
      <h3 className="qualification_title font-medium">Web Developer Intern</h3>
      <span className="qualification_subtitle inline-block font-small mb-1">LC Studio</span>
      <div className="qualification_calendar gap-2 flex font-light">
      <FaCalendarAlt /> 20 April 2022 - Present
      </div>
      </div>
      </div>

      </div>
      </div>
      </div>
      </section>
  );
};
export default Experience;