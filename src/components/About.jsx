import React from "react";

const About = () => {
    return (
<section
      id="about"
      className="min-h-screen min-w-screen flex pl-5 pr-5 md:flex-row flex-col items-center" 
    > 
   <div className="flex-1 pl-10">
      <h1 className="text-center md:text-4xl  text-2xl md:leading-normal leading-10 text-white font-semibold">About <span className="text-cyan-600">Me</span></h1><br />
      <p className="text-white">I am Fatima Mahlaba a Fullstack Web Developer from Cape Town, South Africa. I am a passionate, hard-working and happy individual.
          As an extrovert, I make friends very easily because I always feel comfortable around new people as well as new environments. I am a bubbly person who is always available to assist anyone who might need my help. I am an explorer of life. Furthermore, I love travelling and being adventurous, and I love learning new things.
      </p><br />
            <p className="pb-2">Here are a few technologies I’ve been working with recently:</p>
            <div className="flex pl-5 pr-5 md:flex-row flex-col">
            <ul className="flex-1 skills-list pl-3">
                 <li>JavaScript</li>
                 <li>TypeScript</li>
                 <li>React</li>
                 <li>Wordpress</li>
            </ul>
            {/* <ul className="flex-1 skill-list">
                 <li>JavaScript</li>
                 <li>TypeScript</li>
                 <li>React</li>
                 <li>Wordpress</li>
            </ul> */}
            </div>
  </div>

       <div id="img" className="flex-1 flex items-center justify-center h-full pt-2 pb-2 ">
          <img src="https://i.postimg.cc/h4YYJ68f/Untitled-design-5-removebg-preview.png" alt="" className="md:w-11/12 h-full object-cover" />
      </div>
</section>
    );
};   
        
 export default About;              