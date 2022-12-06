import React from 'react';
import anime from 'animejs/lib/anime.es.js';

const Loader = () => {

  const anim = anime.timeline({
    loop: true,
    direction: 'alternate',
  });
  
  anim
    .add({
      targets: '#logo path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutQuart',
      duration: 2000,
      delay: function(el, i) { return i * 250 },
    })
    .add({
      targets: '#logo #F',
      duration: 1000,
      opacity: 1,
      easing: 'easeInOutQuart'
    });

  return (

    <section
      id="experience"
      className="min-h-screen pt-20 items-center" 
    > 

<svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <g id="F" transform="translate(11.000000, 5.000000)"></g>
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
      />
    </g>
    <text x="35" y="70" fill="currentColor" fontSize="55px" fontFamily="Consolas">
      F
    </text>
  </svg>
</section>
)
};

export default Loader;