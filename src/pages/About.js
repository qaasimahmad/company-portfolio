import {
  Footer,
  WhatYAMICS,
} from "../containers";
import { Brand, Navbar } from "../components";

const About = () => {
  return (
    <div className="App">
      <section className="gradient-bg">
        <Navbar />
      </section>
      <WhatYAMICS />
      <Brand />
      <Footer />
    </div>
  );
};

export default About;
