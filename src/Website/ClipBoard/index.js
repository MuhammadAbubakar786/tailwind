import React from "react";
import Anywhere from "./Sections/Anywhere";
import Clients from "./Sections/Clients";
import Detail from "./Sections/Detail";
import Feature from "./Sections/Feature";
import Footer from "./Sections/Footer";
import { Hero } from "./Sections/Hero";
import Snippet from "./Sections/Snippet";
import WorkFlow from "./Sections/WorkFlow";
const Index = () => {
  return (
    <>
      <Hero />
      <Snippet />
      <Feature />
      <Anywhere />
      <WorkFlow />
      <Clients />
      <Detail />
      <Footer />
    </>
  );
};

export default Index;
