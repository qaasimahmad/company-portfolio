import { Footer, Blog } from "../containers";
import { Brand, Navbar } from "../components";

const BlogComponent = () => {
  return (
    <div className="blog">
      <section className="gradient-bg">
        <Navbar />
      </section>
      <section className="contact-header section-padding">
        <div className="contact-text">
          <h1 className="gradient-text">Blog</h1>
          <p>
            No matter what type of business you are building or industry you’re
            in, technology is likely to be a part of it. Our blogs give insight
            into keeping on the pulse of technology to help you stay one step
            ahead.
          </p>
        </div>
        <div className="contact-image">
          <img
            src="https://media.istockphoto.com/id/184948373/photo/close-up-of-a-blog-key.jpg?s=612x612&w=0&k=20&c=SE7Bv6EFP2JI3iaoqMghsZaA_0sMHL18ys77A-T3YkU="
            alt="blog"
          />
        </div>
      </section>
      <Blog />
      <Brand />
      <Footer />
    </div>
  );
};

export default BlogComponent;
