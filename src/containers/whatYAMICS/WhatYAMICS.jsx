import React from "react";
import { Feature } from "../../components";
import "./whatYAMICS.css";

const whatYAMICS = () => {
  return (
    <div className="whatYamics section-margin" id="whatYamics">
      <div className="whatYamics-feature">
        <Feature
          title="What we do at ZRANK"
          text="ZRANK Consult is an established IT Services Company based in Tilbury, Essex. We have a long history of managed IT service provision, delivering and supporting enterprise-grade IT ecosystems. We were founded in 2005 with the goal of bringing the benefits of enterprise IT solutions to SMEs."
        />
      </div>
      <div className="whatYamics-heading">
        <h1 className="gradient-text">
          More about ZRANK
        </h1>
        <p>Get in touch</p>
      </div>
      <div className="whatYamics-container">
        <Feature
          title="ZRANK"
          text="IT is an investment that can help you unlock your business goals by streamlining systems, improving efficiency, and increasing revenue. Lumina Technologies works in partnership with your organisation to remove the challenges of IT and help you use technology as a true business enabler."
        />
        <Feature
          title="Operation"
          text="We work with any size of business, from fast-growing start-ups to larger corporate clients with 50 users or more."
        />
        <Feature
          title="Cost"
          text="In 2008 we adopted our managed services model, under which we offer our services for a fixed monthly cost. This helps clients control costs and maximise uptime, while also allowing us to plan our workload and optimise staffing levels."
        />
      </div>
    </div>
  );
};

export default whatYAMICS;
