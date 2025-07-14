import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetail1 from './components/Projects/ProjectDetail1';
import ProjectDetail2 from './components/Projects/ProjectDetail2';
import ProjectDetail3 from './components/Projects/ProjectDetail3';
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
        <Route path="/My_portfolio/project/live-project" element={<ProjectDetail1 />} />
        <Route path="/My_portfolio/project/msc-project" element={<ProjectDetail2 />} />
        <Route path="/My_portfolio/project/bsc-project" element={<ProjectDetail3 />} />
      </Routes>
    </Router>
  );
}

export default App;
