import Navbar from './components/Navbar';
import Loader from './components/Loader';
import Logo from './components/Logo';
import Intro from './components/Intro';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div>
        <Navbar />
         {/* <Loader />
         <Logo /> */}
         <Intro />
         <About />
         <Portfolio />
         {/* <Experience /> */}
         <Contact />
         <Footer />
     </div>
  )
}

export default App;