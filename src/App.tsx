import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Context
import { ThemeProvider } from "./contexts/ThemeContext";

// Components (common)
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Internships from "./components/Internships";
import Research from "./components/Research";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Followers from "./components/Followers";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden overflow-y-auto">
        <Router>
          <Header />

          <main className="overflow-x-hidden">
            <Routes>
              {/* Home Page (all sections like before) */}
              <Route
                path="/"
                element={
                  <div className="overflow-hidden">
                    <Hero />
                    <About />
                    <Projects />
                    <Internships />
                    <Research />
                    <Resume />
                    <Contact />
                  </div>
                }
              />

              {/* Followers Page */}
              <Route path="/followers" element={<Followers />} />
            </Routes>
          </main>

          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
