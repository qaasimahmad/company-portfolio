import { Footer } from "../containers";
import { Brand, Navbar } from "../components";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ProductsConponent = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      {" "}
      <section className="gradient-bg">
        <Navbar />
      </section>
      <section className="contact-header section-padding">
        <div className="contact-text">
          <h1 className="gradient-text">IT Products</h1>
          <p>
            Our job is to make sure your IT systems are fit-for-purpose,
            up-to-date and future-proof. We will also make sure that all your
            data is secure and you can retrieve it whenever you need, and that
            any issues will be dealt with swiftly and effectively
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
      <section className="products it-note section-margin section-padding gradient-bg">
        <h1 className="gradient-text">Stay on top of your game.</h1>
        <p>
          In keeping with our core philosophy of bringing robust enterprise
          solutions to small and medium businesses, we have chosen to partner
          with specific organisations that we feel meet these objectives. Our
          Partners have been chosen for their proven track records and our
          personal experience of working closely with them. We are proud to be
          able to offer products and licensing for a number of our partners.
        </p>
        <button onClick={() => navigate("/contact")}>
          Get in touch <MdKeyboardArrowRight color="#FFF" size={25} />
        </button>
      </section>
      <Brand />
      <Footer />
    </div>
  );
};

export default ProductsConponent;
