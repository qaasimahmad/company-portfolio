import { Routes, Route } from "react-router-dom";
import { About, Blog, Contact, ItServices, Landing, Products } from "./pages";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/about-zrank" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/tech-news" element={<Blog />} />
        <Route exact path="/it-services" element={<ItServices />} />
        <Route exact path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;
