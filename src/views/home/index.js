import React from "react";
import About from "./About";
import News from "./News";
import ActivityAgenda from "./ActivityAgenda";
import DocumentLibaray from "./DocumentLibaray";
import Training from "./Training";
import StatisticNumbers from "./StatisticNumbers";
import Infographs from "./Infographs";
import PhotoAlbum from "./PhotoAlbum";
import VideoLibrary from "./VideoLibrary";
import Partner from "./Partner";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <>
      <About />
      <News />
      <ActivityAgenda />
      <DocumentLibaray />
      <Training />
      <StatisticNumbers />
      <Infographs />
      <PhotoAlbum />
      <VideoLibrary />
      <Partner />
      <ContactUs />
    </>
  );
};

export default Home;
