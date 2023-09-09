import React from "react";
import Header from "./Components/Header";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Services from "./Components/Services"
import Footer from "./Components/Footer";
import "./styles/App.scss"
import "./styles/mediaquery.scss"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Services />} />
        <Route path="*" element={<div> Page Not Found 404 </div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
