import React from "react";
import About from "./component/About";
import Blog from "./component/Blog";
import Footer from "./component/Footer/Footer";
import SubFooter from "./component/Footer/subFooter";
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
      <Blog />
      <SubFooter />
      <Footer />
    </section>
  );
}

export default App;
