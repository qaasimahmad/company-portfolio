import { Footer } from "../containers";
import { Brand, Navbar } from "../components";
import { BiSupport } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact">
      <section className="gradient-bg">
        <Navbar />
      </section>
      <section className="contact-header section-padding">
        <div className="contact-text">
          <h1 className="gradient-text">Contact Us</h1>
          <p>
            If you need IT Support, please click on the button below.
            Alternatively, please give us a call on <BiSupport /> Support:
            01375790716
          </p>
          <button>
            IT Support <MdKeyboardArrowRight color="#FFF" size={25} />
          </button>
        </div>
        <div className="contact-image">
          <img
            src="https://media.istockphoto.com/id/1125310445/photo/no-need-to-worry-shes-here-to-help.jpg?s=612x612&w=0&k=20&c=-Xmw3wdpyU2JD7nyHGY8Jo8tGFEXOUMS3xappNPh4z0="
            alt="contact"
          />
        </div>
      </section>
      <section className="contact-form section-margin section-padding gradient-bg">
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Company Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Telephone" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <span>
            <input className="checkbox" type="checkbox" name="" id="" />
            <p>Sign me up to receive your newsletter</p>
          </span>
          <span>
            <input className="checkbox" type="checkbox" name="" id="" />
            <p>
              I understand that by ticking this box and submitting this form, I
              consent to Lumina Technologies contacting me by email or phone in
              order to process my enquiry. ZRANK consult will not pass your
              details onto other companies or third parties.
            </p>
          </span>
          <button>Submit</button>
        </form>
      </section>
      <Brand />
      <Footer />
    </div>
  );
};

export default Contact;
