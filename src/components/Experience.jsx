import React from "react";
import {useRef, useEffect} from 'react'

function Experience() {
   const ref = useRef(null);
   
   useEffect(() => {
      const handleClick = event => {
         const target = event.target;
         const tabNum = target.dataset.tab;
         const activeTab = document.querySelector('.tabs .active');
         const activeContent = document.querySelector('.content .visible');
         const currentContent = document.querySelector(`.content__section[data-tab='${tabNum}']`);
         if (!tabNum) {
           return;
         }
         activeTab.classList.remove('active');
         target.classList.add('active');
          activeContent.classList.remove('visible');
          currentContent.classList.add('visible');
  
      };
  
      const tabs = ref.current
  
      tabs.addEventListener('click', handleClick);
  
      return () => {
        tabs.removeEventListener('click', handleClick);
      };
    }, []);
   return (
      
        <section
           id="Intro"
            className="flex items-center justify-center flex-col pt-20 pb-6"
               >
                <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Experience</span>
        </h3>
      </div><br /><br />

        <div className="container">
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
</div>

        </section>
   )
  }

export default Experience;

