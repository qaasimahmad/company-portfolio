import React, { useContext } from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const { setIsEmailSubmit } = useContext(AuthContext);
  const subscribeFormik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values, { resetForm }) => {
      if (values.email) {
        toast.success("Successfully subscribed to our mail list", {
          position: toast.POSITION.TOP_LEFT,
          // toastId: "Error",
        });
        setIsEmailSubmit(true);
        resetForm({ values: "" });
      }
    },
  });
  return (
    <div className="header section-padding">
      <div className="header-content">
        <h1 className="gradient-text">
          Let's Build Something amazing for you at ZRANK
        </h1>
        <p>
          We have always believed in putting our clients first, and our vision
          is to deliver great service through great people doing great things.
          We know our clients appreciate our ethos and high-quality standards,
          and we are delighted that ZRANK’s success has also been recognised by
          our business peers via multiple recommendations and awards.
        </p>
        <form onSubmit={subscribeFormik.handleSubmit}>
          <div className="header-content-input">
            <input
              type="email"
              name="email"
              onChange={subscribeFormik.handleChange}
              value={subscribeFormik.values.password}
              onBlur={subscribeFormik.handleBlur}
              placeholder="Your Email Address"
            />
            <button type="submit">Get Started</button>
          </div>
        </form>
        <div className="header-content-people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
