// import React from "react";
// import {useRef, useEffect} from 'react'

// function Experience() {
//    const ref = useRef(null);
   
//    useEffect(() => {
//       const handleClick = event => {
//          const target = event.target;
//          const tabNum = target.dataset.tab;
//          const activeTab = document.querySelector('.tabs .active');
//          const activeContent = document.querySelector('.content .visible');
//          const currentContent = document.querySelector(`.content__section[data-tab='${tabNum}']`);
//          if (!tabNum) {
//            return;
//          }
//          activeTab.classList.remove('active');
//          target.classList.add('active');
//           activeContent.classList.remove('visible');
//           currentContent.classList.add('visible');
  
//       };
  
//       const tabs = ref.current
  
//       tabs.addEventListener('click', handleClick);
  
//       return () => {
//         tabs.removeEventListener('click', handleClick);
//       };
//     }, []);
//    return (
      
//         <section
//            id="experience"
//             className="min-h-screen flex items-center justify-center flex-col pt-20 pb-6"
//                >
//                 <div className="text-center">
//         <h3 className="text-4xl font-semibold">
//           My <span className="text-cyan-600">Experience</span>
//         </h3>
//       </div><br /><br />

//         <div className="container">
//   <div className="tabs" ref={ref}>
//     <a className="active tab tab-1" data-tab="1">Afriquezeen</a>
//     <a className="tab tab-2"  data-tab="2">Cornerstone Institute</a>
//     <a className="tab tab-3"  data-tab="3">Lifechoices Academy</a>
//     <a className="tab tab-4"  data-tab="4">LC Studio</a>

//     <span className="highlighter"></span>
    
//   </div>

//   <div className="content">

//     <div className="content__section visible" data-tab="1">
//       <h1 className="text-cyan-600">Director</h1>
//       <p className="text-gray-600 text-xs">January 2019 - present</p>
//       <ul  className="skill-list pl-5">
//       <li className="text-gray-600">Plan and execute Company goals</li>
//       <li className="text-gray-600">Managing the accounts and all administrative duties</li>
//       <li className="text-gray-600">Managing staff</li>
//       </ul>
//     </div>

//     <div className="content__section" data-tab="2">
//     <h1 className="text-cyan-600">Web Developer Intern</h1>
//       <p className="text-gray-600 text-xs"> 20 June 2022 - 20 July 2022</p>
//       <ul  className="skill-list pl-5">
//       <li className="text-gray-600">Data Capturing</li>
//       <li className="text-gray-600">Building Prototypes for new website</li>
//       </ul>
//     </div>

//     <div className="content__section" data-tab="3">
//     <h1 className="text-cyan-600">Web Developer Intern</h1>
//       <p className="text-gray-600 text-xs" >September 2021 - April 2022</p>
//       <ul  className="skill-list pl-5">
//       <li className="text-gray-600">6 month coding bootcamp</li>
//       <li className="text-gray-600">6 months internship</li>
//       </ul>
//     </div>

//     <div className="content__section" data-tab="4">
//     <h1 className="text-cyan-600">IT Support Intern</h1>
//       <p className="text-gray-600 text-xs" >September 2022 - 20 April 2022</p>
//       <ul  className="skill-list pl-5">
//       <li className="text-gray-600">6 month coding bootcamp</li>
//       <li className="text-gray-600">6 months internship</li>
//       </ul>
//     </div>
//   </div>
// </div>

//         </section>
//    )
//   }

// export default Experience;

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

import * as React from 'react';
import { Timeline } from '@mui/lab';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

export default function Experience() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Eat
          </Typography>
          <Typography>Because you need strength</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Code
          </Typography>
          <Typography>Because it&apos;s awesome!</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Sleep
          </Typography>
          <Typography>Because you need rest</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Repeat
          </Typography>
          <Typography>Because this is the life you love!</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}