import { Footer } from "../containers";
import { Brand, Navbar } from "../components";
import { BiSupport } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useFormik } from "formik";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { toast } from "react-toastify";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const { isMsgSubmit, setIsMsgSubmit } = useContext(AuthContext);
  const contactFormik = useFormik({
    initialValues: {
      name: "",
      companyName: "",
      email: "",
      tel: "",
      message: "",
      newsletter: false,
      terms: false,
    },
    onSubmit: async (values, {resetForm}) => {
      if (values) {
        toast.success(
          "We have recieved your message, we typically reply in 24 hours.",
          {
            position: toast.POSITION.TOP_LEFT,
            // toastId: "Error",
          }
        );
        setIsMsgSubmit(true);
        resetForm({values: ""})
      }
    },
  });
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
        <form onSubmit={contactFormik.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={contactFormik.handleChange}
            value={contactFormik.values.name}
            onBlur={contactFormik.handleBlur}
          />
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            onChange={contactFormik.handleChange}
            value={contactFormik.values.companyName}
            onBlur={contactFormik.handleBlur}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={contactFormik.handleChange}
            value={contactFormik.values.email}
            onBlur={contactFormik.handleBlur}
          />
          <input
            type="text"
            name="tel"
            placeholder="Telephone"
            onChange={contactFormik.handleChange}
            value={contactFormik.values.tel}
            onBlur={contactFormik.handleBlur}
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            onChange={contactFormik.handleChange}
            value={contactFormik.values.message}
            onBlur={contactFormik.handleBlur}
          ></textarea>
          <span>
            <input
              className="checkbox"
              type="checkbox"
              name=""
              id="newsletter"
              onChange={contactFormik.handleChange}
              value={contactFormik.values.newsletter}
              onBlur={contactFormik.handleBlur}
            />
            <p>Sign me up to receive your newsletter</p>
          </span>
          <span>
            <input
              className="checkbox"
              type="checkbox"
              name="terms"
              id=""
              onChange={contactFormik.handleChange}
              value={contactFormik.values.terms}
              onBlur={contactFormik.handleBlur}
            />
            <p>
              I understand that by ticking this box and submitting this form, I
              consent to ZRANK consult contacting me by email or phone in
              order to process my enquiry. ZRANK consult will not pass your
              details onto other companies or third parties.
            </p>
          </span>
          <button type="submit">Submit</button>
        </form>
      </section>
      <Brand />
      <Footer />
      {isMsgSubmit && (
        <ToastContainer draggable={false} autoClose={3000} transition={Zoom} />
      )}
    </div>
  );
};

export default Contact;
