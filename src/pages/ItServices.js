import { Footer } from "../containers";
import { Brand, Navbar } from "../components";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ItServices = () => {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <section className="gradient-bg">
        <Navbar />
      </section>
      <section className="contact-header section-padding">
        <div className="contact-text">
          <h1 className="gradient-text">IT Services</h1>
          <p>
            Our job is to make sure your IT systems are fit for purpose, up to
            date, and future-proof. We will also make sure all your data is
            secure and you can retrieve it whenever you need, and that any
            issues are dealt with swiftly and effectively.
          </p>
          <button onClick={() => navigate("/contact")}>
            Get in touch <MdKeyboardArrowRight color="#FFF" size={25} />
          </button>
        </div>
        <div className="contact-image">
          <img
            src="https://media.istockphoto.com/id/1212597557/photo/woman-using-laptop-while-sitting-at-home.jpg?s=612x612&w=0&k=20&c=3IWsKjNZh40zDZLi5hnsZodfTNH1pxeGHs_zize_EkY="
            alt="contact"
          />
        </div>
      </section>
      <section className="it-note section-margin section-padding gradient-bg">
        <h1 className="gradient-text">
          Here to support your business every day.
        </h1>
        <p>
          You need your IT to run seamlessly to ensure that your staff can work
          at the highest possible productivity level. Disruptions in the
          workplace can cause higher levels of stress as well as reduced work
          output, which in time may affect the quality of work delivered to your
          clients. We can help you with all your IT needs including hosting, IT
          security, IT managed services and IT outsourcing. We offer IT support
          for all our clients and ensure that an effective IT strategy is in
          place. See more of our services below and get in touch to improve your
          IT.
        </p>
      </section>
      <Brand />
      <Footer />
    </div>
  );
};

export default ItServices;
