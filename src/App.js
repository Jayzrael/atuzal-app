import React from "react";
import Copy from "./components/Copy";
import CountDown from "./components/CountDown";
import Footer from "./components/Footer";
import Form from "./components/Form";
import ImagesSection from "./components/gallery/ImagesSection";
import VideosSection from "./components/gallery/VideosSection";
import Nav from "./components/Nav";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <>
      <Nav />
      <Copy />
      <CountDown targetDate="2023-03-31T00:00:00" />
      <Pricing />
      <ImagesSection />
      {/* <VideosSection /> */}
      <Form />
      <Footer />
    </>
  );
};
export default App;
