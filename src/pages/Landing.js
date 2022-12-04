import { Footer, Possibility, Features, Header } from "../containers";
import { Cta, Brand, Navbar } from "../components";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Landing = () => {
  const { isEmailSubmit } = useContext(AuthContext);
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
      {isEmailSubmit && (
        <ToastContainer draggable={false} autoClose={3000} transition={Zoom} />
      )}
    </div>
  );
};

export default Landing;
