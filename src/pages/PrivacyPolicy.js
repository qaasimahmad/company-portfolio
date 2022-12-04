import { Footer } from "../containers";
import { Brand, Navbar } from "../components";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="privacy">
      <section className="gradient-bg">
        <Navbar />
      </section>
      <section className="contact-header section-padding">
        <div className="contact-text">
          <h1 className="gradient-text">Privacy Notices for ZRANK consult</h1>
          <p>To be updated soon... </p>
          <p>
            Contact Information If You have any questions regarding this Privacy
            Policy or the Personal Data we collect, or if You wish to exercise
            any of the data subject rights listed above, make any comments or
            complaints about anything related to this Privacy Policy, please
            contact our Data Protection Officer on this email address:
            <Link>dpo@zrankconsult.co.uk</Link>
          </p>
        </div>
      </section>
      <Brand />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
