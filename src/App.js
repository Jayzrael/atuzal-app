import React from "react";
import Copy from "./components/Copy";
import CountDown from "./components/CountDown";
import Footer from "./components/Footer";
import Form from "./components/Form";
import ImagesSection from "./components/gallery/ImagesSection";
import Nav from "./components/Nav";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <>
      <Nav />
      <Copy />
      <CountDown />
      <Pricing />
      <ImagesSection />
      <Form />
      <Footer />
    </>
  );
};
export default App;
