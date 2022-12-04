import React from "react";
import { useNavigate } from "react-router-dom";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Build IT",
    text: "By outsourcing your IT, your business can access up-to-date expertise, security and applications at the same time as reducing costs.",
  },
  {
    title: "Manage IT",
    text: "You can rest assured that your company has the right IT infrastructure and support for your needs.",
  },
  {
    title: "Host IT",
    text: "Our Hosting Services look after your data and services on-site. Our cloud business solutions will manage and support all aspects of your system.",
  },
  {
    title: "Protect IT",
    text: "Our Security Services will protect your business from any cyber-security risks. We’ll prevent any unauthorised access to your business assets.",
  },
];
const Features = () => {
  const navigate = useNavigate();
  return (
    <div className="features section-padding" id="features">
      <div className="features-heading">
        <h1 className="gradient-text">
          The Future is Now and You Just Need To Realize It. Step into the
          Future Today & Make it Happen.
        </h1>
        <p style={{ cursor: "pointer" }} onClick={() => navigate("/contact")}>
          Request a Quote
        </p>
      </div>
      <div className="features-container">
        {featuresData.map((item) => (
          <Feature key={item.title} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Features;
