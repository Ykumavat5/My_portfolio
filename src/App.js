import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetail1 from './components/Projects/ProjectDetail1';
import ProjectDetail2 from './components/Projects/ProjectDetail2';
import ProjectDetail3 from './components/Projects/ProjectDetail3';
import ProjectDetail4 from './components/Projects/ProjectDetail4';
import ProjectDetail5 from './components/Projects/ProjectDetail5';
import ProjectDetail6 from './components/Projects/ProjectDetail6';
import ProjectDetail7 from './components/Projects/ProjectDetail7';
import ProjectDetail8 from './components/Projects/ProjectDetail8';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/My_portfolio"
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/My_portfolio/project/live-project-kwick" element={<ProjectDetail1 />} />
        <Route path="/My_portfolio/project/live-project-athena-flower" element={<ProjectDetail2 />} />
        <Route path="/My_portfolio/project/live-project-retreat-india" element={<ProjectDetail3 />} />
        <Route path="/My_portfolio/project/live-project-hireoneway" element={<ProjectDetail4 />} />
        <Route path="/My_portfolio/project/live-project-matrix" element={<ProjectDetail5 />} />
        <Route path="/My_portfolio/project/live-project-wellness-nature-care" element={<ProjectDetail6 />} />
        <Route path="/My_portfolio/project/msc-project" element={<ProjectDetail7 />} />
        <Route path="/My_portfolio/project/bsc-project" element={<ProjectDetail8 />} />

      </Routes>
    </Router>
  );
}

export default App;
