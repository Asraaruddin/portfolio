import logo from './logo.svg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import './index.css';
import Header from './components/head';
import About from './components/about';
import Footer from './components/footer';
import HeroSection from './components/herosection';
import Contact from './components/contact';
import Projects from './components/projects';
import Skills from './components/skills';

function App() {
  return (
  <div className="app-container">
      <Header/>
  
      <HeroSection/>
      <Skills/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
