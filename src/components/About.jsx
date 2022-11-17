import React from "react";

const About = () => {
    return (
<section
      id="home"
      className="min-h-screen flex pl-5 pr-5 md:flex-row flex-col items-center"
    > 
   <div className="flex-1">
      <h1 className="text-center md:text-5xl pb-2 text-2xl md:leading-normal leading-10 text-white font-bold">About Me</h1>
      <p className="text-gray-600">I am Fatima Mahlaba a 26 year old Web Developer from Cape Town, South Africa.I am a passionate, hard-working and happy individual.
          As an extrovert, I make friends very easily because I always feel comfortable around new people as well as new environments. I am a bubbly person who is always available to assist anyone who might need my help. I am an explorer of life. Furthermore, I love travelling and being adventurous, and I love learning new things.
      </p><br />
            <p className="pb-2">Here are a few technologies I’ve been working with recently:</p>
            <ul className="skills-list pl-5">
                 <li>JavaScript</li>
                 <li>TypeScript</li>
                 <li>React</li>
                 <li>Wordpress</li>
            </ul>
  </div>

       <div id="img" className="flex-1 flex items-center justify-center h-full pt-2 pb-2 border-solid border-2 border-cyan-600 ">
          <img src="https://i.postimg.cc/fRh0Pr12/damian-zaleski-RYyr-k3-Ysqg-unsplash.jpg" alt="" className="md:w-11/12 h-full object-cover" />
      </div>
</section>
    );
};   
        
 export default About;              