import React from "react";
import "@/App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { JoinUs } from "./components/sections/JoinUs";
import { News } from "./components/sections/News";
import { Partners } from "./components/sections/Partners";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <JoinUs />
        <News />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
