import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import Intro from './components/Intro';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';

function App() {
const [loading, setLoading] = useState(false);

useEffect(() => {
  setLoading(true)
  setTimeout(() => {
  setLoading(false)
   }, 8000 )
}, []);
  return (
    <div>
        <Navbar />
         {/* <Loader /> */}
         <Intro />
         <About />
         <Portfolio />
         <Experience/>
         <Contact />
         <Footer />
     </div>
  )
}

export default App;