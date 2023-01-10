import React from "react";

const Contact = () => {
  return (
<section id="contact" className="min-h-screen min-w-screen pt-20 md:grid grid-col items-center">
  <div className="md:text-center text-center">
  <span className="text-cyan-600 md:text-6xl text-5xl">Get In Touch</span><br /><br />
  <p className="">I look forward to hearing from you.Although I’m not currently looking for any new opportunities, my inbox is always open.</p>
    <p className="">Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
    
<a href="mailto:fatimamahlaba@gmail.com" className="cursor-pointer rounded hover:bg-cyan-500 w-40 p-3 m-20 text-center border-2 border-cyan-600 active:text-white">
  Say Hello
</a>
</div>
</section>
);
};
export default Contact;