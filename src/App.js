import React from "react";
import About from "./component/About";
import Header from "./component/Header";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Service from "./component/Service";
import Testimony from "./component/Testimony";

function App() {
  return (
    <section>
      <Header />
      <Navbar />
      <Home />
      <Service />
      <About />
      <Testimony />
    </section>
  );
}

export default App;
