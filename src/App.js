import React from "react";
import "./App.css";
import Header from "./components/Header";
import Lead from "./components/Lead";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <Header />
      <Lead />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
