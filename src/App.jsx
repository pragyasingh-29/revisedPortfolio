
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import {Certifications} from './components/Certifications/Certifications';
import { Skills } from './components/Skills/Skills';

function App() {

  return (
    <div>
      <h1 className={styles.App}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills/>
        <Certifications />
        <Contact/>
      </h1>
    </div>
  )
}

export default App
