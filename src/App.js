import "./App.css";
import About from "./Navbar/About/about";
import Enquire from "./Navbar/enquire";
import Products from "./Navbar/products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Navbar/nav";
import Home from "./Home/home";
import Read from "./Navbar/read";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        {/* <a href="tel:+91-97890-93629"><span>Call Now</span></a> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/enquire" element={<Enquire />} />
          <Route path="/read" element={<Read />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
