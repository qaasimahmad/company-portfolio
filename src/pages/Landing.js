import {
  Footer,
  Possibility,
  Features,
  Header,
} from "../containers";
import { Cta, Brand, Navbar } from "../components";
import "../App.css";

const Landing = () => {
  return (
    <div className="App">
      <section className="gradient-bg">
        <Navbar />
        <Header />
      </section>
      <Brand />
      <Features />
      <Possibility />
      <Cta />
      <Footer />
    </div>
  );
};

export default Landing;
