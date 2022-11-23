import React from "react";
import {useRef, useEffect} from 'react'

function Experience() {
   const ref = useRef(null);
   useEffect(() => {
      const handleClick = event => {
         const target = event.target;
         const tabNum = target.dataset.tab;
         const activeTab = document.querySelector('#tabs .active');
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
   // const ref = useRef(null);
   // const tabs = document.querySelector('.tabs');
// console.log(tabs)
// tabs.addEventListener('click', e => handleClick(e));
// function handleClick(e) {
//   const target = e.target;
//   const tabNum = target.dataset.tab;
//   const activeTab = document.querySelector('#tabs .active');
//   const activeContent = document.querySelector('.content .visible');
//   const currentContent = document.querySelector(`.content__section[data-tab='${tabNum}']`);
//   if (!tabNum) {
//     return;
//   }
//   activeTab.classList.remove('active');
//   target.classList.add('active');
//   activeContent.classList.remove('visible');
//   currentContent.classList.add('visible');
// }
   return (
      
        <section
           id="Intro"
            className="flex items-center justify-center flex-col pt-20 pb-6"
               >
        <div className="container">
  <div className="tabs" ref={ref}>
    <a className="tab tab-1 active"  href="#" data-tab="1">Tab 1</a>
    <a className="tab tab-2" href="#" data-tab="2">Tab 2</a>
    <a className="tab tab-3" href="#" data-tab="3">Tab 3</a>

    <span className="highlighter"></span>
    
  </div>

  <div className="content">

    <div className="content__section visible" data-tab="1">
      <p>Lorem ipsum dolor amet umami kogi you probably haven't heard of them activated charcoal hexagon literally. Vice art party XOXO retro blue bottle. Squid tousled skateboard man bun pabst unicorn sriracha poutine echo park crucifix plaid health goth four dollar toast. XOXO gochujang PBR&B kombucha brooklyn street art lyft swag.</p>
    </div>

    <div className="content__section" data-tab="2">
      <p>Wayfarers small batch brooklyn, pabst godard flannel blog authentic fingerstache salvia disrupt kombucha pickled. Actually hammock semiotics DIY cold-pressed lo-fi swag franzen chia locavore. Biodiesel venmo irony, salvia shaman plaid photo booth keffiyeh VHS slow-carb chillwave knausgaard vape occupy.</p>
    </div>

    <div className="content__section" data-tab="3">
      <p>Gluten-free you probably haven't heard of them jianbing pitchfork pabst. Kombucha occupy iPhone live-edge beard iceland freegan small batch before they sold out DIY marfa chillwave sustainable taiyaki bushwick. Meggings franzen kogi, next level fingerstache +1 kitsch YOLO activated charcoal craft beer adaptogen twee. Yuccie tumeric irony heirloom, shoreditch kinfolk swag cold-pressed 90's chicharrones.</p>
    </div>
  </div>
</div>

        </section>
   )
  }

export default Experience;

