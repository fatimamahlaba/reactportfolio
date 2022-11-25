import React from "react";

const Contact = () => {
  return (
<section id="contact" className="min-h-screen grid pt-20 md:grid grid-col items-center">
  <span className="text-cyan-600 md:text-6xl text-5xl text-center">Get In Touch</span>
  <p>I look forward to hearing from you.Although I’m not currently looking for any new opportunities, my inbox is always open.</p>
    <p>Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p><br />
<a href="mailto:fatimamahlaba@gmail.com" className="cursor-pointer hover:bg-cyan-500 w-40 p-3 m-20 justify-center text-center border-2 border-cyan-600 active:text-white">
  Say Hello
</a>
</section>
);
};
export default Contact;

