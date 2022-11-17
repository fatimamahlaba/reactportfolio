import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Intro = () => {
  
  return (
    <section
      id="home"
      className="min-h-screen flex pt-20 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src="https://i.postimg.cc/fRh0Pr12/damian-zaleski-RYyr-k3-Ysqg-unsplash.jpg" alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Fatima Mahlaba</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          <button className="btn-primary mt-8">Download CV</button>
          <div className="mt-8 text-3xl text-gray-600 hover:text-white cursor-pointer flex items-center md:justify-start justify-center gap-5">
            <FaGithub />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;